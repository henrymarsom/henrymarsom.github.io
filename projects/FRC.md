---
layout: default
title: FRC
permalink: /projects/FRC/
---
/* ===== Project Detail Page ===== */

.project-detail {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

.project-detail-title {
  font-size: 3rem;
  margin-bottom: 5px;
}

.project-detail-subtitle {
  font-size: 1.15rem;
  color: #555;
  max-width: 800px;
  margin-bottom: 50px;
}

/* Row layout */
.project-detail-row {
  display: flex;
  gap: 40px;
  align-items: center;
}

/* Image */
.project-detail-image {
  flex: 1;
}

.project-detail-image img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
}

/* Text */
.project-detail-text {
  flex: 1;
}

.project-detail-text h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.project-detail-text p {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

/* Divider */
.project-divider {
  margin: 60px 0;
  border: none;
  border-top: 1px solid #ddd;
}

/* ===== Dark Mode ===== */

body.dark .project-detail-subtitle {
  color: #ccc;
}

body.dark .project-divider {
  border-top: 1px solid #333;
}

body.dark .project-detail-image img {
  border: none;
  box-shadow: 0 6px 16px rgba(0,0,0,0.6);
}

/* ===== Mobile ===== */

@media (max-width: 768px) {
  .project-detail-row {
    flex-direction: column;
  }

  .project-detail-title {
    font-size: 2.2rem;
  }

  .project-detail-text h2 {
    font-size: 1.5rem;
  }
}
