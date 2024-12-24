// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Spinner } from 'react-bootstrap';

// const EulaDialog = () => {
//     const [show, setShow] = useState(true);
//     const [eulaText, setEulaText] = useState('');
//     const [loading, setLoading] = useState(true);

//     // Fetch EULA text from the backend
//     useEffect(() => {
//         const fetchEulaText = async () => {
//             try {
//                 const response = await fetch('/api/eula-text');
//                 const text = await response.text();
//                 setEulaText(text);
//             } catch (error) {
//                 console.error('Error fetching EULA text:', error);
//                 setEulaText('Failed to load the EULA text.');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchEulaText();
//     }, []);

//     const handleClose = () => setShow(false);
//     const handleAccept = () => {
//         console.log('EULA Accepted');
//         setShow(false);
//     };

//     const handleDecline = () => {
//         console.log('EULA Declined');
//         setShow(false);
//     };

//     return (
//         <Modal show={show} onHide={handleClose} centered>
//             <Modal.Header closeButton>
//                 <Modal.Title>End User License Agreement</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 {loading ? (
//                     <Spinner animation="border" />
//                 ) : (
//                     <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
//                         {eulaText}
//                     </pre>
//                 )}
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={handleDecline}>
//                     Decline
//                 </Button>
//                 <Button variant="primary" onClick={handleAccept}>
//                     Accept
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default EulaDialog;
