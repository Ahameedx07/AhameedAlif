/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    text-align: center;
    padding: 80px 0;
    position: relative;
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.social-icons {
    margin-top: 20px;
}

.social-icons a {
    color: white;
    font-size: 24px;
    margin: 0 10px;
    transition: 0.3s;
    display: inline-block;
}

.social-icons a:hover {
    transform: translateY(-5px);
    color: #f8d56b;
}

/* Sections Common Styles */
section {
    padding: 60px 0;
}

h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
    color: #1e3c72;
}

/* About Section */
.about {
    background: white;
}

.about p {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.1rem;
}

/* Works Section */
.works {
    background: #f1f3f6;
}

.video-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.video-gallery iframe {
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Contact Section */
.contact {
    background: white;
    text-align: center;
}

.btn {
    display: inline-block;
    padding: 12px 25px;
    background: #1e3c72;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    margin: 10px;
    transition: all 0.3s ease;
    font-weight: 500;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.whatsapp-btn {
    background: #25D366;
}

/* Social Links Section */
.social-links {
    background: #f1f3f6;
}

.links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
}

.social-btn {
    display: inline-flex;
    align-items: center;
    padding: 12px 20px;
    background: white;
    color: #333;
    text-decoration: none;
    border-radius: 50px;
    transition: all 0.3s ease;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.social-btn i {
    margin-right: 8px;
    font-size: 18px;
}

.social-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

/* Footer */
footer {
    background: #1a1a1a;
    color: white;
    text-align: center;
    padding: 30px 0;
}

.scroll-top {
    color: white;
    font-size: 24px;
    margin-top: 15px;
    display: inline-block;
    transition: 0.3s;
}

.scroll-top:hover {
    color: #f8d56b;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    .links {
        flex-direction: column;
        align-items: center;
    }
    
    .social-btn {
        width: 80%;
        justify-content: center;
    }
}
