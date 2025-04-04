// **Back to Top Button** (All pages)
const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block"; // Show the button
        } else {
            backToTopButton.style.display = "none"; // Hide the button
        }
    });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    });
}


  // **Form Validation (Only on Contact Page)**
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                event.preventDefault(); // Stop form submission
            }
        });
    }
	
	
	
	
	


// Click-activated accordion functionality
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-header");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function () {
            const parentItem = this.parentElement;
            const content = parentItem.querySelector(".accordion-content");

            // Toggle visibility on click
            if (content.style.display === "block") {
                content.style.display = "none";
                parentItem.classList.remove("active");
            } else {
                content.style.display = "block";
                parentItem.classList.add("active");
            }
        });
    });
});




// Example resources data with at least one food bank and one homeless shelter per zip code
const resources = [
    {
        zip: '48104',
        name: 'Food Gatherers Food Bank',
        type: '',
        contact: '(734) 761-2796',
        email: '',
        mapLink: 'https://foodgatherers.org/find-help/',
        donateLink: 'https://www.giveffect.com/checkout/4131?wl=1',
        volunteerLink: 'https://foodgatherers.org/get-involved/volunteer/'
    },
    {
        zip: '48104',
        name: 'Shelter Association of Washtenaw County',
        type: '',
        contact: '(734) 961-1999',
        email: 'shelter@washtenawcounty.com',
        mapLink: 'https://www.annarborshelter.org/client-impact',
        donateLink: 'https://www.annarborshelter.org/donation-options',
        volunteerLink: 'https://www.annarborshelter.org/volunteer'
    },
    {
        zip: '48105',
        name: 'Food Gatherers Food Bank',
        type: '',
        contact: '(734) 761-2796',
        email: '',
        mapLink: 'https://foodgatherers.org/find-help/',
        donateLink: 'https://www.giveffect.com/checkout/4131?wl=1',
        volunteerLink: 'https://foodgatherers.org/get-involved/volunteer/'
    },
    {
        zip: '48105',
        name: 'SafeHouse Center',
        type: '',
        contact: '(734) 995-5444',
        email: '',
        mapLink: 'https://www.safehousecenter.org/emergency-temporary-shelter/',
        donateLink: 'https://www.safehousecenter.org/donate/',
        volunteerLink: 'https://www.safehousecenter.org/volunteer-information-2-2/'
    },
    {
        zip: '48126',
        name: 'Gleaners Community Food Bank of Southeastern Michigan',
        type: '',
        contact: '(313) 923-3535',
        email: '',
        mapLink: 'https://pantrynet.org/',
        donateLink: 'https://www.gcfb.org/give-now/',
        volunteerLink: 'https://www.gcfb.org/give-time/volunteer-opportunities/'
    },
    {
        zip: '48126',
        name: 'Forgotten Harvest Food Bank',
        type: '',
        contact: '(248) 967-1500',
        email: '',
        mapLink: 'https://www.forgottenharvest.org/find-food/',
        donateLink: 'https://www.forgottenharvest.org/donate/',
        volunteerLink: 'https://www.forgottenharvest.org/volunteer-3/'
    }
];

// Function to filter and display resources based on the selected zip code
function filterResources() {
    const zipCode = document.getElementById("zipcode").value;  // Get selected zip code from dropdown
    const resourceContainer = document.getElementById("resource-cards");

    // Clear previous results
    resourceContainer.innerHTML = '';

    // Filter resources based on zip code
    const filteredResources = resources.filter(resource => resource.zip === zipCode);

    if (filteredResources.length > 0) {
        // Display filtered resources
        filteredResources.forEach(resource => {
            const card = document.createElement("div");
            card.classList.add("resource-card");

            // Conditionally include email if it exists
            const emailSection = resource.email ? 
                `<p><strong>Contact:</strong> ${resource.contact} | <a href="mailto:${resource.email}">${resource.email}</a></p>` 
                : `<p><strong>Contact:</strong> ${resource.contact}</p>`;

            // Insert the card HTML
            card.innerHTML = `
                <h3>${resource.name}</h3>
                ${emailSection}
                <div class="resource-buttons">
                    <a href="${resource.mapLink}" target="_blank" class="btn">Find on Map</a>
                    <a href="${resource.donateLink}" target="_blank" class="btn donate">Donate</a>
                    <a href="${resource.volunteerLink}" target="_blank" class="btn volunteer">Volunteer</a>
                </div>
            `;

            // Append the new card to the container
            resourceContainer.appendChild(card);
        });
    } else {
        // No resources found for the given zip code
        resourceContainer.innerHTML = `<p>No resources found for zip code ${zipCode}. Please try another zip code.</p>`;
    }
}

// **Daily Mental Health Tip Generator**
document.addEventListener("DOMContentLoaded", function () {
    const tipButton = document.getElementById("generate-tip");
    const tipDisplay = document.getElementById("tipDisplay"); // Ensure you have an element with this ID
    const tips = [
        "We must accept finite disappointment, but never lose infinite hope. - Martin Luther King, Jr.",
        "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. - Albert Einstein",
        "Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
        "The only way out is through. - Robert Frost",
        "You are braver than you believe, stronger than you seem, and smarter than you think. – A.A. Milne (Winnie the Pooh)",
        "The struggle you're in today is developing the strength you need for tomorrow. – Robert Tew",
		"Out of difficulties grow miracles. – Jean de La Bruyère"
		
    ];

    if (tipButton && tipDisplay) {
        tipButton.addEventListener("click", function () {
            
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            tipDisplay.textContent = randomTip; // Display the random tip
        });
    } else {
        console.log("Elements not found!");  // This log will confirm if elements are missing
    }
});




    // **Progress Bar (All pages)**
    window.onscroll = function() {
        updateProgressBar();
    };

    function updateProgressBar() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var docHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var winHeight = window.innerHeight;
        var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        document.getElementById("progress-bar").style.width = scrollPercent + "%";
    }

//palestine
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle('active');
    });
});


//mental Health

// Sensory Cards Click Interaction
// Sensory prompts for each category
const sensoryPrompts = {
    "See": [
        "Find something round in the room.",
        "Look for a pattern nearby.",
        "Notice the colors around you.",
        "Identify something that brings you joy.",
        "Spot an object you haven't noticed before."
    ],
    "Touch": [
        "Feel the texture of your clothing.",
        "Run your fingers over a nearby surface.",
        "Notice the temperature of something in your hand.",
        "Hold something soft and describe how it feels."
    ],
    "Hear": [
        "Listen for the farthest sound you can hear.",
        "Identify a rhythmic or repeating sound.",
        "Pay attention to the tone of someone's voice.",
        "Notice any silence between sounds."
    ],
    "Smell": [
        "Try to identify a scent nearby.",
        "Breathe deeply and notice any fragrances in the air.",
        "Find a familiar scent and recall a memory associated with it."
    ],
    "Taste": [
        "Focus on the taste in your mouth right now.",
        "Take a sip of water and notice its texture.",
        "Try to remember the last thing you ate and describe its flavor."
    ]
};

// Function to randomize sensory card text on click
// Function to toggle text on click
document.querySelectorAll(".sensory-card").forEach(card => {
    let originalText = card.innerHTML; // Store the original text

    card.addEventListener("click", function() {
        let category = this.dataset.category; // Get category from data attribute

        // If card is showing a prompt, revert to original text
        if (this.classList.contains("toggled")) {
            this.innerHTML = originalText;
            this.style.background = ""; // Reset background
            this.style.color = ""; // Reset text color
            this.classList.remove("toggled");
        } else {
            let prompts = sensoryPrompts[category]; // Get related prompts
            let randomPrompt = prompts[Math.floor(Math.random() * prompts.length)]; // Pick random one

            this.innerHTML = randomPrompt; // Set new text
            this.style.background = "#ffc107"; // Change color for effect
            this.style.color = "#000"; // Ensure readability
            this.classList.add("toggled");
        }
    });
});

// Progressive Muscle Relaxation Steps
const relaxationSteps = [
    "Tense your fists tightly... then release.",
    "Raise your shoulders up to your ears... and drop them.",
    "Squeeze your thighs together... and relax.",
    "Clench your jaw for a moment... then loosen it.",
    "Curl your toes tightly... then let them go.",
    "Take a deep breath in... and exhale slowly."
];

let stepIndex = 0;
let relaxationInterval;
const relaxationText = document.getElementById("relaxation-step");
const fillBar = document.getElementById("fill-bar");
const startButton = document.getElementById("start-relaxation");
const stopButton = document.getElementById("stop-relaxation");

function startRelaxation() {
    stepIndex = 0;
    nextStep();
}

function nextStep() {
    if (stepIndex < relaxationSteps.length) {
        relaxationText.textContent = relaxationSteps[stepIndex];

        // First step: fill the bar
        if (stepIndex % 2 === 0) {
            fillBar.style.transition = "height 5s ease-in-out";
            fillBar.style.height = "100%";
        } 
        // Second step: drain the bar
        else {
            fillBar.style.transition = "height 5s ease-in-out";
            fillBar.style.height = "0%";
        }

        // Move to the next step after 5 seconds (for both fill and drain)
        relaxationInterval = setTimeout(() => {
            stepIndex++;
            nextStep();
        }, 5000);
    } else {
        relaxationText.textContent = "You're now fully relaxed! 😊";
        fillBar.style.height = "0%"; // Reset bar
    }
}

function stopRelaxation() {
    clearTimeout(relaxationInterval);
    relaxationText.textContent = "Click 'Start' to begin.";
    fillBar.style.height = "0%"; // Reset bar immediately
}

startButton.addEventListener("click", startRelaxation);
stopButton.addEventListener("click", stopRelaxation);
