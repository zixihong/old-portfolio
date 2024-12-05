'use client'
import React, { useState } from 'react';
import styles from './ProjectsGrid.module.css';

const projects = [
  { id: 1, 
    title: <><span style={{color:'orange'}}><b>Smartphone-based Colorimetric Plasmonic Sensing for Respiratory Diseases PT. 1</b></span></>, 
    bgImage: '/icons/Smartphonedetect.png', 
    description: 
    <>
      <div className={styles.descriptionText}>
        Alongside a research team at the University of Texas at Dallas and the beginning of the triology of research projects I conducted regarding nanoparticle infection diagnostics, I developed a smartphone-based plasmonic sensing system for rapid detection of respiratory viruses by analyzing the color changes of plasmonic nanoparticle samples after contact with target virion DNA from nasal swab sample. My work focused on creating a user-friendly, quick, and cost-effective alternative to traditional virus diagnostic tests.
      </div>

      <div className={styles.imageContainer}>
        <img src="/desc/phoneprot.png" alt="Phone Prototype" width="400" height="400"/>
        <img src='/desc/morewaves.png' alt='More Wavelength' width="500" height="500"/>
      </div>

      <div className={styles.featuresList}>
        <div className={styles.feature}>
          <b>Image Processing:</b> I developed algorithms to process the spectral images captured by the smartphone camera using MATLAB. This involved working with raw image data and extracting colormetric information related to the nanoparticle aggregation to determine if infection is present.
        </div>
        <div className={styles.feature}>
          <b>Spectral Analysis:</b> I analyzed the absorption spectra of the nanoparticle solutions. This included identifying peak wavelengths using spectromettric data and measuring shifts in these peaks when target DNA was present.
        </div>
        <div className={styles.feature}>
          <b>Data Visualization:</b> I created visualizations of our spectral data, showing how the absorption curves changed with different concentrations of target DNA. This helped in interpreting and presenting our results effectively.
        </div>
        <div className={styles.feature}>
          <b>Signal Processing:</b> Using Fourier Analysis and other signal processing techniques, I cleaned up our spectral data, reducing noise and improving the accuracy of our measurements.
        </div>
      </div>

      <div className={styles.pdfContainer}>
        <embed 
          src="/pdfs/Research - Smartphone-based Plasmonic Sensing/Smartphone-based Plasmonic Sensing for Respiratory Diseases - Poster.pptx.pdf" 
          width="500" 
          height="600" 
          type="application/pdf"
        />
        <embed 
          src="/pdfs/Research - Smartphone-based Plasmonic Sensing/Smartphone-based Plasmonic Sensing for Respiratory Viruses - Slides.pptx (1).pdf" 
          width="500" 
          height="600" 
          type="application/pdf"
        />
      </div>
    </> 
  },
  { id: 2, 
    title: <><span style={{color: 'orange'}}><b>MATLAB Plasmonic Nanoparticle Virion Quantification System PT. 2</b></span></>, 
    bgImage: '/icons/MATLAB1.png', 
    description: 
    <>
      <div className={styles.descriptionText}>
        Number 2 of the triology of research projects I conducted using nanoparticle infection diagnosis. This time as an independent research team seperate from the original research team at the University of Texas at Dallas, I, along with a partner, aimed to develop a diagnostic test using MATLAB that was not only able to rapidly and accurately diagnose patients with respiratory viruses, but also quanitify the number of virions inside their nasal swab sample. The project developed a groundbreaking diagnostic system that uses gold nanoparticles to detect and quantify Respiratory Syncytial Virus (RSV). By pumping RSV-aggregated and unaggregated nanoparticles through a microcapillary intersected by lasers, the system generates and detects nanobubbles, allowing for both rapid diagnosis and precise viral quantification. The system achieved a 99.99% diagnostic accuracy in just 5.2 minutes, outperforming current methods like PCR and rapid antigen tests. Additionally, the virion counting mechanism, validated by Poisson statistics, reached a 98.52% accuracy rate, providing crucial data to healthcare professionals for treatment decisions.
      </div>

      <div className={styles.imageContainer}>
        <img src="/desc/countingprincipal.png" alt="Digitial Counting Principal" width="400" height="400"/>
        <img src='/desc/digitalphotoacoustic.png' alt='Photoacoustic Data Analaysis' width='600' height='500'/>
      </div>

      <div className={styles.featuresList}>
        <div className={styles.feature}>
          <b>Laser Detection System:</b> Using Python, I developed the laser detection system that captured data from the 532 nm and 633 nm lasers. I integrated real-time data capture from the oscilloscope to track nanobubble formation, automating the detection process.
        </div>
        <div className={styles.feature}>
          <b>Poisson Statistics Validation:</b> I applied Poisson statistics to cross-validate the virion counting mechanism, achieving nearly perfect correlation (r = 0.989) between theoretical and experimental results.
        </div>
        <div className={styles.feature}>
          <b>Threshold Determination:</b> Using MATLAB, I created bivariate data plots to set thresholds for detecting RSV-conjugated and unconjugated AuNPs by calculating the mean plus 5 standard deviations, covering 99.99% of signals.
        </div>
        <div className={styles.feature}>
          <b>Signal Processing:</b> I implemented real-time signal processing to analyze the dips in millivolt values (mV) on the oscilloscope, determining virion concentration by counting "Fon" and "Foff" signals.
        </div>
        <div className={styles.feature}>
          <b>Amplitude and AUC Analysis:</b> I analyzed the amplitude and area under the curve (AUC) for nanobubble signals, which differentiated between aggregated and unaggregated AuNPs.
        </div>
      </div>

      <div className={styles.pdfContainer}>
        <embed 
          src="/pdfs/Project - PT 1. MATLAB Virion Quantification/MATLAB Plasmonic Nanoparticle Virion Counting and Interpretation System - Paper.pdf" 
          width="500" 
          height="600" 
          type="application/pdf"
        />
        <embed 
          src="/pdfs/Project - PT 1. MATLAB Virion Quantification/MATLAB Single Virion Quantification System - Poster.pdf" 
          width="500" 
          height="500" 
          type="application/pdf"
        />
        <embed 
          src="/pdfs/Project - PT 1. MATLAB Virion Quantification/MATLAB Virus Severity and Prognosis Evaluation - Slides.pdf" 
          width="500" 
          height="600" 
          type="application/pdf"
        />
      </div>
    </> 
  },
  { id: 3, 
    title: <><span style={{color:'orange'}}><b>Bayesian Ridge Regression AI Modeling in Virus Severity Prediction PT. 3</b></span></>, 
    bgImage: '/icons/BAYE2.png', 
    description: 
    <>
      <div className={styles.descriptionText}>
        As a continuation of the MATLAB diagnostic test and the conclusion to the triology of virion diagnostics using nanoparticles, my partner and I aimed to upgrade the virion quantification system by using artificial intelligence to include a feature that provides information on the prognosis, severity, and infectability based off of different factors such as age, weight, etc and the number of virions based off of our original project. Ultimately, The model we developed analyzes an infant's health and biological parameters to predict infection severity and other useful infromation that could be tracked. I trained the model on over 1 million samples generated from various combinations of weight, age, and virion count, computing a severity index as the output. To ensure robustness, I introduced a dataset with added variance to simulate real-world noise. A unique aspect of my approach was incorporating domain-specific biological knowledge, where weight was treated as the dominant health indicator. Using Bayesian Ridge Regression, I captured the non-linear relationships among these factors. The final model achieved an average R² score of 0.72 and a mean-squared error (MSE) of 0.122, demonstrating strong predictive capabilities after validating on 20% of the dataset.
      </div>

      <div className={styles.imageContainer}>
        <img src="/desc/bayesianss1.png" alt="Bayesian Ridge Regression instructions" width="600" height="500"/>
        <img src='/desc/bayesianss2.png' alt='Bayesian Ridge Regression Instructions 2' width='500' height='500'/>
      </div>

      <div className={styles.featuresList}>
        <div className={styles.feature}>
          <b>Programming Languages:</b> I implemented the model using Python, with Pandas for data handling and NumPy for efficient numerical computations.
        </div>
        <div className={styles.feature}>
          <b>Model Implementation:</b> The Bayesian Ridge Regression model was developed using Scikit-learn, allowing for hyperparameter tuning of key parameters (α and λ) to ensure optimal model fitting for the complex relationships between the input variables.
        </div>
        <div className={styles.feature}>
          <b>Severity Index Calculation:</b> Using domain-specific biological insights, the severity index formula emphasized weight deviations and age-related immunity differences. The formula incorporated coefficients that accounted for the squared impact of weight and a linear relationship for age, with virion count serving as a multiplying factor.
        </div>
        <div className={styles.feature}>
          <b>Dataset Generation:</b> I generated a dataset of over 1 million samples, each comprising three key input variables: weight, age, and virion count. The severity index was calculated based on a combination of these factors. I introduced a small 0.01% variance to simulate real-world noise in the data, making the model more resilient to discrepancies typically encountered in practical healthcare scenarios.
        </div>
        <div className={styles.feature}>
          <b>Statistical Validation:</b> I used mean-squared error (MSE) and coefficient of determination (R²) as key metrics to assess the model's performance. The model was tested across multiple iterations, producing consistent and reliable results with an average MSE of 0.122 and an R² of 0.72.
        </div>
        <div className={styles.feature}>
          <b>Matplotlib and Seaborn:</b> These libraries were used to generate visual representations of the model's performance, including scatter plots, 3D visualizations, and error analysis. Visual models helped identify key trends and the accuracy of predictions over different weight and age ranges.
        </div>
        <div className={styles.feature}>
          <b>Scikit-learn:</b> This library was crucial for implementing the Bayesian Ridge Regression model, enabling easy model training, testing, and hyperparameter tuning. The model's parameters were adjusted to fit the dataset's non-linear relationships between weight, age, and virion count.
        </div>
        <div className={styles.feature}>
          <b>Pandas:</b> Used for data manipulation and preprocessing. The dataset of over 1 million samples was loaded, cleaned, and structured using Pandas, facilitating easy integration with the regression model.
        </div>
        <div className={styles.feature}>
          <b>NumPy:</b> Utilized for efficient computation of the severity index and statistical metrics. Its array-based operations enabled rapid data manipulation and mathematical transformations on large datasets.
        </div>
        <div className={styles.feature}>
          <b>Bayesian Ridge Regression:</b> I chose to use Bayesian Ridge Regression models because it is ideal for modeling non-linear relationships like the ones present between weight, age, and virion count in this project. By using priors and regularization, I was able to avoid overfitting while remaining flexible to new data.
        </div>
        <div className={styles.feature}>
          <b>Hyperparameter Tuning:</b> I used a Gamma distribution to model the priors for the hyperparameters α (alpha) and λ (lambda), ensuring optimal regularization and precision in the final model. This was critical for achieving a balance between bias and variance, enabling the model to generalize well on unseen data.
        </div>
      </div>

      <div className={styles.pdfContainer}>
        <embed 
          src="/pdfs/Project - PT 2. Bayesian Ridge Regression AI Modeling/Bayesian Ridge Regression AI Modeling in Virus Severity Prediction - Paper.pdf" 
          width="500" 
          height="600" 
          type="application/pdf"
        />
      </div>
    </> 
  },
  { id: 4, 
    title: <><span style={{color: 'orange'}}><b>Pubnect</b></span></>, 
    bgImage: '/icons/Pubnect.png', 
    description: 
    <>
      <div className={styles.descriptionText}>
        Launched as a startup, I co-founded <a href='https://pubnect.com/' target="_blank" rel="noopener noreferrer">Pubnect</a> with a cofounder as an online platform that connects researchers with the broader academic community by hosting virtual conferences and seminars that are accessible to all.
      </div>

      <div className={styles.descriptionText}>
        Pubnect enables researchers, authors, and advocates to share their work with global audiences, fostering collaboration, increasing visibility, and discovering new publication and funding opportunities. Pubnect also provides an accessible platform for students, professionals, grant providers, and policymakers to stay connected with the latest research trends and innovations from around the world.
      </div>

      <div className={styles.imageContainer}>
        <img src='/desc/emailsender.png' alt='Original Layout for Email Sender' width='450' height='500'/>
        <img src='/desc/scraper.png' alt='Web Scraper' width='500' height='500'/>
      </div>

      <div className={styles.featuresList}>
        <div className={styles.feature}>
          <b>Automatic SMTP Email Sender:</b> Using Mailgun API, I designed an automatic email sender using Python and SMTP that sends personalized invitation emails for Pubnect's conferences and seminars to selected presenters. The script loads up recipient details from a CSV file and then generating unique registration codes for each email to verify each researcher's identity. 
          The script formats and sends emails by looping through the CSV file with the contact information of all the selected presenters, and it integrates CSV handling, HTTP requests, and personalized content generation to automate the emailing process efficiently.
        </div>
        <div className={styles.feature}>
          <b>Web Scraper:</b> I developed a web scraper script using Python and BeautifulSoup to extract conference and seminar details from various academic websites. The scraper collects information such as emails, event titles, dates, locations, and registration links, which are then used to populate Pubnect's event calendar. This tool streamlines the process of finding and listing academic events, making it easier for researchers to discover new opportunities and connect with the academic community.
        </div>
        <div className={styles.feature}>
          <b>CSV Duplicate Remover:</b> Using Python and Pandas, I created a script that compares two CSV files and removes any duplicates based on matching title and email values. This tool simplifies managing and deduplicating data across multiple CSV files, making it easier to maintain clean datasets.
        </div>
        <div className={styles.feature}>
          <b>CURRENTLY BUILDING:</b> I've been working on developing an AI-powered research networking platform designed to connect researchers with grant funding, conference opportunities, publication avenues, and potential collaborators. My goal is to create a tool that addresses the common challenges faced by academics today, making the research process more accessible and efficient.
        </div>
      </div>
    </> 
  },

  { id: 5, 
    title: <><span style={{color:'orange'}}><b>National Zoning Atlas</b></span></>, 
    bgImage: '/icons/NATZA.png', 
    description: 
    <>
      <div className={styles.descriptionText}>
        I worked with researchers across 5 different branches of the <a href='https://www.zoningatlas.org/' target="_blank" rel="noopener noreferrer">National Zoning Atlas</a> (Texas, California, Connecticut, Indiana, and Rhode Island) to create an interactive atlas/map that displays zoning information for over 30,000 zoning ordinances across the country.
      </div>

      <div className={styles.imageContainer}>
        <img src="/desc/NZAMAP.png" alt="NZA Map" width="500" height="400"/>
        <img src='/desc/NZAzoomed.png' alt='NZA Map Zoomed In' width='500' height='500'/>
      </div>

      <div className={styles.featuresList}>
        <div className={styles.feature}>
          <b>Interactive Zoning Map System:</b> Along with a team, I helped develop a high-performance map that displays all the zoning data for the zoning ordinances using JavaScript, Python, AWS, and ArcGIS.
        </div>
        <div className={styles.feature}>
          <b>Geospatial Analysis:</b> I analyzed zoning data from over 12,000 cities using R and ArcGis.
        </div>
      </div>

      <div className={styles.pdfContainer}>
        <embed 
          src="/pdfs/Research - National Zoning Atlas/Texas Zoning Atlas_ERG.pdf" 
          width="500" 
          height="600" 
          type="application/pdf"
        />
      </div>
    </> 
  },
  { id: 6, 
    title: <><span style={{color:'orange'}}><b>SnDBot</b></span></>, 
    bgImage: '/icons/transcript_emotions.png', 
    description: 
    <>
      <div className={styles.projectStatus}>
        CURRENTLY BUILDING:
      </div>

      <div className={styles.descriptionText}>
        I'm in the process of developing a speech and debate bot that uses AI to transcribe debates and analyze various aspects of speech. It will identify filler words, track stutters and speech flow, and extract data on pitch, vocal variation, and emotional tone. Additionally, the bot will analyze facial expressions and body language, including gestures and posture, providing comprehensive feedback to improve public speaking and debate performance.
      </div>

      <div className={styles.imageContainer}>
        <img src="/desc/comcaimodel.png" alt="Presidential Candidates Emotions" width="500" height="500"/>
        <img src='/icons/transcript_emotions.png' alt='Facial Emotion Recognition' width='500' height='600' />
      </div>

      <div className={styles.featuresList}>
        <div className={styles.feature}>
          <b>OpenCV Facial Emotion Recognition:</b> So far, I have developed an emotion recognizer that analyzes facial expressions to determine emotional states for the presidential candidates using clips from the most recent presidential debate. Using pre-trained cascade models from OpenCV, I was able to recognize and classify emotions such as happiness, anger, surprise, and more.
        </div>
        <div className={styles.feature}>
          <b>TensorFlow Speech-to-Text Transcription:</b> I have also implemented a speech-to-text transcription system that converts audio files into text. This system will be used to transcribe debates and speeches, allowing the bot to analyze the content and provide feedback on speech patterns and content.
        </div>
      </div>
    </> 
  },

  { id: 7, 
    title: <><span style={{color:'orange'}}><b>The Atlas Land Intiative (ATLI)</b></span></>, 
    bgImage: '/icons/ATLILOGO.png', 
    description: 
    <>
      <div className={styles.projectStatus}>
        CURRENTLY BUILDING:
      </div>

      <div className={styles.descriptionText}>
        ATLI is a project I am currently building to help family farmers purchase land by evaluating plot qualities using AI and data analysis. The initiative focuses on developing software that tackles challenges like climate change and farm proximity to markets, empowering farmers to make informed land-buying decisions. It uses a combination of GIS data, soil quality assessments, and environmental factors to evaluate potential land parcels. The analysis focuses on key metrics such as soil fertility, water availability, and proximity to markets, providing farmers with personalized insights into the best land options for their needs.
      </div>

      <div className={styles.imageContainer}>
        <img src="/desc/sample_utility_score.png" alt="Sample Utility Score" width="500" height="500"/>
        <img src='/desc/xgboost.png' alt='XGBoost Hyperparemeters Beta 0.1' width="500" height="500"/>
      </div>

      <div className={styles.featuresList}>
        <div className={styles.feature}>
          <b>Random Forest Regression:</b> So far, I have implemented a Random Forest model with customized hyperparameters including n_estimators range of [100-1000], max_depth [4-64], and min_samples_split [2-32], demonstrating understanding of ensemble learning mathematics.
        </div>
        <div className={styles.feature}>
          <b>XGBoost Algorithm:</b> Applied gradient boosting with learning rates [0.01-0.3], max_depth [3-10], and gamma regularization [0-0.4], showcasing knowledge of gradient descent optimization and boosting mathematics.
        </div>
        <div className={styles.feature}>
          <b>Grid Search Optimization:</b> Used GridSearchCV with 5-fold cross-validation to optimize model parameters, showing understanding of hyperparameter optimization mathematics.
        </div>
        <div className={styles.feature}>
          <b>Spatial Join Operations:</b> Implemented complex spatial joins between farm boundaries and soil quality data using GeoPandas, requiring understanding of geometric operations and spatial relationship calculations.
        </div>
        <div className={styles.feature}>
          <b>Geospatial Visualization:</b> Created choropleth maps using Folium with customized color gradients and opacity settings, showing proficiency in geospatial data visualization algorithms.
        </div>
        <div className={styles.feature}>
          <b>Distance Algorithms: </b> Implemented inverse distance weighting for water source proximity calculations within 5-mile radius, demonstrating knowledge of geographic distance algorithms.
        </div>
        <div className={styles.feature}>
          <b>Statistical Normalization: </b> Applied MinMaxScaler and StandardScaler transformations to normalize land suitability scores between 0-1, demonstrating understanding of statistical standardization techniques.
        </div>
      </div> 


      <div className={styles.pdfContainer}>
        <embed 
          src="/pdfs/ATLI/The_Atlas_Land_Initiative__ATLI_.pdf" 
          width="500" 
          height="600" 
          type="application/pdf"
        />
      </div>
    </> 
  }
];

function ProjectsGrid() {
  const [activeModal, setActiveModal] = useState(null);
  
  const handleModalClick = (e) => {
    if (e.target.className.includes(styles.modal) && e.target.className.includes(styles.active)) {
      setActiveModal(null);
    }
  };

  return (
    <div>
      <div className={styles.gridContainer}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.gridItem} ${project.id === 6 || project.id === 7 ? styles.specialGrid : ''}`}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => setActiveModal(project.id)}
          >
            <div 
              className={`${styles.overlay} ${project.id === 6 || project.id === 7 ? styles.specialOverlay : ''}`}
            >
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {projects.map(project => (
        <div 
          key={project.id} 
          className={`${styles.modal} ${activeModal === project.id ? styles.active : ''}`}
          onClick={handleModalClick}
        >
          <div className={styles.modalContent}>
  <button className={styles.close} onClick={() => setActiveModal(null)}>
    &times;
  </button>
  <h2>{project.title}</h2>
  <div className={styles.modalBody}>
    {project.description}
  </div>
</div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsGrid;