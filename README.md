# Lumi Beauty Lounge ✨

A responsive beauty lounge website designed to showcase beauty services, display service prices, and make appointment requests easier for clients.

## 📌 About the Project

Lumi Beauty Lounge is a beauty business website built to improve the customer experience by making service information accessible and simplifying the booking process.

Instead of repeatedly answering questions about available services and prices, customers can browse the website, explore treatments, view the service menu, and submit booking requests online.

## 🎯 The Problem

Beauty businesses often receive repetitive messages from customers asking about service prices, available treatments, and appointments. Managing these enquiries manually can be time-consuming and make the booking process less convenient.

## 💡 The Solution

Lumi Beauty Lounge provides a central place where customers can explore services and prices, learn about the business, and submit appointment requests through an online form.

Booking requests are sent to the business email using EmailJS, allowing Lumi to review the requested appointment and contact the customer to confirm or suggest an alternative time.

## ✨ Features

- **Responsive Design:** Adapts to desktop, tablet, and mobile screens.
- **Home Page:** Introduces the beauty lounge and highlights its services.
- **Services Page:** Organizes treatments into categories for easier browsing.
- **Service Menu:** Displays available services and their prices.
- **Testimonials:** Showcases client feedback.
- **Contact Information:** Provides business details, opening hours, and social media links.
- **Online Booking Requests:** Allows customers to submit their contact details, preferred services, date, and time.
- **Email Notifications:** Uses EmailJS to send booking request details to the business email.
- **Booking Feedback:** Displays a success message after a successful submission.
- **Book Now CTA:** Directs visitors to the booking form.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- EmailJS
- Font Awesome
- Google Fonts

## ⚙️ How It Works

1. Customers browse the available services and prices.
2. They navigate to the booking form.
3. They enter their contact details, select their preferred service(s), and provide their preferred appointment date and time.
4. EmailJS sends the booking request to the business email.
5. Lumi  reviews the request and contacts the customer via WhatsApp to confirm the appointment or arrange another time.

**Note:** Submitting a booking request does not automatically confirm an appointment. Confirmation is handled by the business.

## 🚀 Getting Started

### Prerequisites

- A modern web browser.
- A code editor such as Visual Studio Code.
- An internet connection for loading external resources and using EmailJS.

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd lumie-beauty-lounge
   ```

3. Open the project in Visual Studio Code.

4. Run the website using Live Server or another local development server.

### EmailJS Configuration

To enable booking request emails:

1. Create an EmailJS account.
2. Configure an email service and email template.
3. Add your EmailJS public key, service ID, and template ID to the JavaScript configuration.
4. Ensure the template variables match the parameters sent by the booking form.

**Security note:** Keep private credentials and secrets out of your public repository. Follow EmailJS recommendations for public keys, allowed domains, and submission limits.

## 🔮 Future Improvements

- Appointment availability management.
- Automated booking confirmation and rescheduling notifications.
- A gallery featuring authentic client results and beauty treatments.
- Improved booking management for the business.


## 📄 License

This project was created as a web development project. Add a license if you intend to distribute or reuse the source code under specific terms.
