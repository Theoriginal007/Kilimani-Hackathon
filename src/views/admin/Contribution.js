import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Draggable from 'react-draggable';

const projects = [
  { id: 1, name: 'Water Conservation', description: 'Initiatives to improve water supply and management in Kilimani.' },
  { id: 2, name: 'Energy Efficiency', description: 'Projects to address blackouts and improve energy infrastructure.' },
  { id: 3, name: 'Waste Management', description: 'Programs to manage waste effectively and reduce pollution.' },
  { id: 4, name: 'Noise Reduction', description: 'Efforts to mitigate noise pollution and improve living conditions.' },
];

Modal.setAppElement('#root'); // This is important for accessibility

const Contribution = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
    setMessage(''); // Clear any previous messages
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
    setPhoneNumber('');
    setAmount('');
    setMessage(''); // Clear any previous messages
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    try {
      // Send donation request to your backend
      const response = await axios.post('http://localhost:3001/donate', {
        phoneNumber,
        amount,
      });
      
      console.log('Donation request response:', response.data);
      
      // Redirect to the payment page
      window.location.href = 'https://paystack.com/pay/x9ph1ns6n3';
      
    } catch (error) {
      console.error('Error making donation request:', error);
      // Show an error message
      setMessage('There was an error with your donation. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Support Kilimani Community Projects</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-6 border-b bg-gray-100 text-left">Project Name</th>
            <th className="py-3 px-6 border-b bg-gray-100 text-left">Description</th>
            <th className="py-3 px-6 border-b bg-gray-100 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="py-4 px-6 border-b">{project.name}</td>
              <td className="py-4 px-6 border-b">{project.description}</td>
              <td className="py-4 px-6 border-b text-center">
                <button
                  onClick={() => openModal(project)}
                  className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none"
                >
                  Donate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Donate Modal"
        className="inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <Draggable
          defaultPosition={{ x: 0, y: 0 }} // Set the default position
          bounds="parent" // Restricts dragging within the modal overlay
        >
          <div className="bg-white p-8 rounded-lg max-w-md mx-auto flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-center">Support {selectedProject?.name}</h2>
            <p className="text-lg mb-4 text-center">{selectedProject?.description}</p>
            <form onSubmit={handleDonate} className="w-full max-w-sm flex flex-col items-center">
              <label htmlFor="phone" className="block text-lg font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border rounded mb-4"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <label htmlFor="amount" className="block text-lg font-medium mb-2">
                Amount (KES)
              </label>
              <input
                type="number"
                id="amount"
                className="w-full p-2 border rounded mb-4"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <div className="flex justify-center gap-2 mb-4">
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-800 active:bg-gray-400 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none transition-all duration-150"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              {message && <p className="text-green-600 text-center mt-4">{message}</p>}
            </form>
          </div>
        </Draggable>
      </Modal>
    </div>
  );
};

export default Contribution;
