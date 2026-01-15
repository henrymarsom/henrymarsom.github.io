---
layout: default
title: Projects
permalink: /projects/
---

<section class="projects-container">

  <h1 class="projects-title">Projects</h1>

  <p class="projects-intro">
    A selection of engineering and technical projects demonstrating design,
    analysis, and implementation across mechanical, software, and systems domains.
  </p>

  <div class="projects-grid">

    <!-- Project 1 -->
    <a href="{{ site.baseurl }}/projects/load-bearing-bracket/" class="project-link">
      <div class="project-card">
        <img src="{{ site.baseurl }}/assets/project1.png" alt="Load-bearing bracket CAD model">

        <div class="project-content">
          <h3>Load-Bearing Bracket Design</h3>
          <p>
            Designed and analyzed a structural bracket subjected to static loading
            conditions. Finite element analysis was used to evaluate stress
            distribution and deformation, leading to geometry optimization while
            maintaining a safety factor greater than 2.
          </p>

          <p class="project-tools">
            SolidWorks · FEA · Mechanical Design
          </p>
        </div>
      </div>
    </a>

    <!-- Project 2 -->
    <a href="{{ site.baseurl }}/projects/line-following-robot/" class="project-link">
      <div class="project-card">
        <img src="{{ site.baseurl }}/assets/project2.png" alt="Autonomous robot prototype">

        <div class="project-content">
          <h3>Autonomous Line-Following Robot</h3>
          <p>
            Developed an autonomous mobile robot using sensor feedback and closed-loop
            control. Firmware was written in C++ to process real-time sensor data and
            dynamically adjust motor speed for stable navigation.
          </p>

          <p class="project-tools">
            C++ · Embedded Systems · Control Systems
          </p>
        </div>
      </div>
    </a>

    <!-- Project 3 -->
    <a href="{{ site.baseurl }}/projects/signal-processing/" class="project-link">
      <div class="project-card">
        <img src="{{ site.baseurl }}/assets/project3.png" alt="Signal processing plots">

        <div class="project-content">
          <h3>Signal Processing of Noisy Sensor Data</h3>
          <p>
            Implemented digital filtering techniques to reduce noise in experimental
            sensor data. Compared multiple filtering approaches and evaluated
            performance using frequency-domain analysis.
          </p>

          <p class="project-tools">
            MATLAB · Python · Signal Processing
          </p>
        </div>
      </div>
    </a>

  </div>

</section>
