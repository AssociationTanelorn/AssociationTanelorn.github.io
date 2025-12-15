import React, { useState } from 'react';

function SubscriptionForm() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [displayContent, setDisplayContent] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(null)); // One for each row
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [commentary, setCommentary] = useState('');
	const [saveError, setSaveError] = useState(false);
	const [saveSuccess, setSaveConfirm] = useState(false);

	const days = ['Mercredi 07/05', 'Jeudi 08/05', 'Vendredi 09/05', 'Samedi 10/05', 'Dimanche 11/05'];
	const mainURL = 'https://465bqjnqxjxzepi7dyol2lojg40jjsrv.lambda-url.eu-west-3.on.aws/?';

	const setContentFromResponse = (payload) => {
		if (payload.firstName) {
			setFirstName(payload.firstName);
		}
		if (payload.lastName) {
			setLastName(payload.lastName);
		}
		if (payload.commentary) {
			setCommentary(payload.commentary);
		}
		if (payload.subscription) {
			setSelectedOptions(payload.subscription);
		}
	}

	const saveData = async () => {
		setSaveConfirm(false);
		setSaveError(false);
		setLoading(true);
		const payload = {
			"firstName" : firstName,
			"lastName": lastName,
			"commentary": commentary,
			"subscription": selectedOptions
		};

		try {
			const response = await fetch(mainURL + 'operation=writing&email=' + email, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});
		
			if (!response.ok) {
				setSaveConfirm(false);
				setSaveError(true);
			} else {
				setSaveConfirm(true);
			}
			setLoading(false);		
		} catch (error) {
			console.error('Error saving data:', error);
			setLoading(false);
			setSaveError(true);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email) {
			setError('Une adresse email est requise.');
			return;
		}
		setLoading(true);
		setError('');

		try {
			const response = await fetch(mainURL + 'operation=reading&email=' + email);
			const result = await response.json();
			
			console.log(result);
			setContentFromResponse(result);
			setDisplayContent(true);
		} catch (err) {
			setError('Erreur lors de la récupération des données, merci de nous contacter directement via notre page de contact.');
		} finally {
			setLoading(false);
		}
	};

	const handleRadioChange = (row, col) => {
		const newSelections = [...selectedOptions];
		newSelections[row] = col; // Set the selected column for the row
		setSelectedOptions(newSelections);
		console.log("row: " + row + " col : " + col);
		console.log(newSelections);
	};

	return (
		<div
			id="formulaire"
			style={{
				backgroundColor: 'var(--aw-color-bg-page)',
				color: 'var(--aw-color-text-default)',
				fontFamily: 'var(--aw-font-sans)',
				padding: '20px',
				borderRadius: '8px',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginBottom: '30px',
				maxWidth: '72rem'
			}}
			className='rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6'
		>
			<div style={{ marginLeft: '20px' }}>
				<form onSubmit={handleSubmit}>
					<label
						htmlFor="email"
						style={{
							display: 'block',
							marginBottom: '8px',
							fontSize: '1rem',
							fontWeight: 'bold',
							color: 'var(--aw-color-text-default)',
						}}
					>
						Veuillez entrer votre email afin de vous inscrire (ou pour modifier votre inscription) :
					</label>
					<input
						type="email"
						id="email"
						placeholder="votre-email@gmail.com"
						onChange={(e) => setEmail(e.target.value)}
						required
						disabled={displayContent}
						style={{
							backgroundColor: 'var(--aw-color-bg-page)',
							padding: '10px',
							marginBottom: '10px',
							border: '1px solid var(--aw-color-secondary)',
							borderRadius: '4px',
							fontFamily: 'var(--aw-font-sans)',
						}}
					/>
					<button
						type="submit"
						disabled={loading || displayContent}
						style={{
							backgroundColor: loading || displayContent ? 'grey' : 'var(--aw-color-primary)',
							color: 'white',
							padding: '10px 15px',
							marginLeft: '10px',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
							fontFamily: 'var(--aw-font-sans)',
						}}
					>
						{loading ? 'Chargement...' : displayContent ? 'Données récupérées' : 'Envoyer'}
					</button>
				</form>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</div>
		
		{displayContent ? (
			<div style={{ overflowX: 'auto', margin: '20px', display: 'flex', flexDirection: 'column' }}>
				<label for="firstName">Prénom :</label>
				<input
					type="text"
					id="firstName"
					placeholder="votre prénom"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
					style={{
						backgroundColor: 'var(--aw-color-bg-page)',
						padding: '10px',
						maxWidth: '250px',
						marginTop: '3px',
						marginBottom: '15px',
						border: '1px solid var(--aw-color-secondary)',
						borderRadius: '4px',
						fontFamily: 'var(--aw-font-sans)',
					}}
				/>
				<label for="lastName">Nom :</label>
				<input
					type="text"
					id="lastName"
					placeholder="votre nom"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					required
					style={{
						backgroundColor: 'var(--aw-color-bg-page)',
						padding: '10px',
						maxWidth: '250px',
						marginTop: '3px',
						marginBottom: '15px',
						border: '1px solid var(--aw-color-secondary)',
						borderRadius: '4px',
						fontFamily: 'var(--aw-font-sans)',
					}}
				/>
				<label for="commentary">Commentaire et Questions :</label>
				<textarea
					type="text"
					id="commentary"
					placeholder=""
					value={commentary}
					onChange={(e) => setCommentary(e.target.value)}
					required
					style={{
						backgroundColor: 'var(--aw-color-bg-page)',
						padding: '10px',
						maxWidth: '500px',
						marginTop: '3px',
						marginBottom: '15px',
						border: '1px solid var(--aw-color-secondary)',
						borderRadius: '4px',
						fontFamily: 'var(--aw-font-sans)',
					}}
				/>
				<table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'var(--aw-font-sans)' }}>
					<thead>
					<tr style={{ backgroundColor: 'var(--aw-color-primary)', color: 'white' }}>
						<th style={{ border: '1px solid #ccc', padding: '5px' }}>Jour</th>
						<th style={{ border: '1px solid #ccc', padding: '5px' }}>
							Formule complète
							<br />
							<br />
							Accès salle, boissons & collations à volonté
							<br />
							et repas midi et soir
							<br />
							40 €
						</th>
						<th style={{ border: '1px solid #ccc', padding: '5px' }}>
							Formule midi
							<br />
							<br />
							Accès salle, boissons & collations à volonté
							<br />
							et repas du midi uniquement
							<br />
							20 €
						</th>
						<th style={{ border: '1px solid #ccc', padding: '5px' }}>
							Formule soir
							<br />
							<br />
							Accès salle, boissons & collations à volonté
							<br />
							et repas du soir uniquement
							<br />
							20 €
						</th>
						<th style={{ border: '1px solid #ccc', padding: '5px' }}>
							Formule diète
							<br />
							<br />
							Accès salle, boissons & collations à volonté
							<br />
							Pas de repas
							<br />
							10 €
						</th>
						<th style={{ border: '1px solid #ccc', padding: '5px' }}>Pas présent ce jour</th>
					</tr>
					</thead>
					<tbody>
					{days.map((day, rowIndex) => (
						<tr key={rowIndex}>
							<td
							style={{
								border: '1px solid #ccc',
								padding: '10px',
								backgroundColor: 'var(--aw-color-bg-page)',
							}}
							>
							{day}
							</td>
							{Array(5)
							.fill(null)
							.map((_, colIndex) => (
								<td
								key={colIndex}
								style={{
									border: '1px solid #ccc',
									padding: '10px',
									textAlign: 'center',
								}}
								>
								{/* Check if it's the last row and column 2 or 4 */}
								{rowIndex === days.length - 1 && (colIndex === 0 || colIndex === 2) ? (
									<span style={{ fontStyle: 'italic', color: 'var(--aw-color-text-muted)' }}>
										Pas de repas le soir
									</span>
								) : (
									<input
									type="radio"
									name={`row-${rowIndex}`} // Ensure only one can be selected per row
									checked={selectedOptions[rowIndex] === colIndex}
									onChange={() => handleRadioChange(rowIndex, colIndex)}
									style={{
										accentColor: 'var(--aw-color-accent)',
										width: '20px',
										height: '20px',
										cursor: 'pointer',
									}}
									/>
								)}
								</td>
							))}
						</tr>
						))}
					</tbody>
				</table>
				
				<button
					onClick={saveData}
					disabled={loading}
					style={{
						backgroundColor: 'var(--aw-color-primary)',
						color: 'white',
						padding: '10px 15px',
						maxWidth: '150px',
						marginTop: '15px',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
						fontFamily: 'var(--aw-font-sans)',
					}}
				>
					{loading ? 'Sauvegarde en cours...' : 'Sauvegarder'}
				</button>
				{saveError && <p style={{ color: 'red' }}>Vos données n'ont pas été sauvegardées suite à une erreur, veuillez réessayer ou nous contacter si le problème persiste.</p>}
				{saveSuccess && <p style={{ color: 'green' }}>Vos données ont bien été sauvegardées !</p>}
			</div>
		) : null}
		</div>
	);
}

export default SubscriptionForm;
