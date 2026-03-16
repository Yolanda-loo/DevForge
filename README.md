# 🛠️ DevForge: Real-Time Collaborative Code Editor

**DevForge** is a high-performance, full-stack web application that allows multiple developers to collaborate on code in real-time.
Built to demonstrate proficiency in **asynchronous system design**, **WebSocket protocols**, and **cloud-native deployment**, 
this project bridges the gap between traditional CRUD apps and complex distributed systems.

---

## 🚀 Key Features

* **Real-Time Synchronization:** Instant code updates across all connected clients using high-speed WebSockets.
* **Professional Editor Experience:** Integrated with the **Monaco Editor** (the core of VS Code) for syntax highlighting and IntelliSense.
* **Multi-Room Architecture:** Support for isolated collaboration "rooms" via dynamic URL routing.
* **Containerized Environment:** Fully Dockerized for seamless deployment and environment parity.
* **Cloud Ready:** Designed for deployment on **Microsoft Azure** or **AWS** using enterprise-grade container registries.

---

## 🏗️ Technical Stack

### **Frontend**

* **React.js:** Component-based UI for high performance.
* **Tailwind CSS:** Modern, responsive styling for a sleek developer experience.
* **Monaco Editor:** Industry-standard code editing engine.

### **Backend**

* **FastAPI (Python):** Utilized for its superior handling of asynchronous operations and WebSockets.
* **WebSockets:** Full-duplex communication for sub-100ms synchronization.
* **Pydantic:** Strict data validation for incoming code streams.

### **DevOps & Infrastructure**

* **Docker & Docker Compose:** Containerization of frontend, backend, and database services.
* **Cloud:** Designed for **Azure App Service** / **AWS App Runner**.

---

## 🛠️ Installation & Setup

### **Prerequisites**

* Docker & Docker Compose installed.
* Python 3.11+ (for local development).
* Node.js (for local development).

### **Quick Start**

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/DevForge.git
cd DevForge

```


2. **Launch with Docker Compose:**
```bash
docker-compose up --build

```


3. **Access the app:**
* Frontend: `http://localhost:3000`
* Backend API: `http://localhost:8000`



---

## 📐 Architecture Overview

DevForge uses a **Broadcaster Pattern**. When a user types, the change is sent to the FastAPI server.
The server identifies the user's `room_id` and broadcasts the delta to all other active WebSocket connections in that specific room, ensuring the local state remains consistent across the network.

---

## 👨‍💻 Author

**Tebogo Mathaba**

* Software Engineer | Data Analyst | Full-Stack Developer
* AWS Solutions Architect | Microsoft Azure Developer Associate
* [Email](mailto:tebogomathaba09@gmail.com) 

---

**Would you like me to help you write a "Technical Challenges" section for this README where you explain how you solved data conflicts?**
