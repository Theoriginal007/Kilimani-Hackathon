# KiliSmart

KiliSmart is a web application designed to monitor various environmental parameters. It includes features for public participation, waste monitoring, power usage monitoring, noise level monitoring, and water quality monitoring.

## Project Structure

### Frontend

- **`frontend/`**: Contains the React frontend application.
  - **`src/components/`**: React components for various features.
  - **`src/pages/`**: React components for different pages.
  - **`src/services/`**: Services for making API calls.
  - **`src/styles/`**: CSS files for styling.

### Backend

- **`kili_smart/`**: Contains the Django backend application.
  - **`core/`**: Core application logic, including models, views, and serializers.
  - **`kili_smart/`**: Main Django project directory with settings and routing.

## Setup

### Frontend
1. **Navigate to the `frontend` directory:**
 cd frontend

## Install dependencies:
npm install

## Start the development server:
npm start

This will start the React development server and open your application in the default web browser.

## Backend
Navigate to the kili_smart directory:
cd kili_smart

## Set up a virtual environment and activate it:
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

## Install Django and other dependencies:

Create a requirements.txt file in your kili_smart directory if not already present, and list all necessary dependencies:

Django>=4.0,<5.0
djangorestframework>=3.14.0

## Install the dependencies:
pip install -r requirements.txt

## Apply migrations and run the server:
python manage.py migrate
python manage.py runserver

This will apply all database migrations and start the Django development server.

## Usage

## Frontend
Visit http://localhost:3000 in your web browser to interact with the React frontend.
Use the frontend to access various environmental monitoring features and interact with the Django backend through the API.

## Backend
The Django REST API will be available at http://localhost:8000/api/.
You can use tools like Postman or cURL to interact with the API endpoints.

## Testing

## Frontend
Run tests using:
npm test

## Backend
Run Django tests using:
python manage.py test

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Fork the repository to your GitHub account.

## Clone the forked repository to your local machine:
git clone https://github.com/your-username/kilismart.git

## Create a new branch for your feature or bug fix:
git checkout -b feature/my-new-feature

## Make your changes and commit them:
git add .
git commit -m "Add a new feature"

## Push your changes to your forked repository:
git push origin feature/my-new-feature

## Open a pull request on GitHub to merge your changes into the main repository.

## Acknowledgements
This project was developed using Django for the backend and React for the frontend.
Thanks to all contributors and open-source libraries that made this project possible.
