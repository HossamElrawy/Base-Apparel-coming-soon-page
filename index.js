// ===== DOM ELEMENTS =====
const signButton = document.querySelector(".js-click-button");
const emailInput = document.querySelector(".js-email-para");
const warnMsg = document.querySelector(".js-error-msg");
const warnTag = document.querySelector(".js-warn-tag");

// ===== EMAIL VALIDATION FUNCTION =====
/**
 * Validates an email address format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid, false otherwise
 */
function isValidEmail(email) {
    return email.includes("@");
}

// ===== ERROR STATE MANAGEMENT =====
/**
 * Shows error state for invalid email input
 */
function showErrorState() {
    warnMsg.classList.add("not-hidden");
    warnTag.classList.add("not-hidden");
    emailInput.classList.add("border-color");
}

/**
 * Hides error state for valid email input
 */
function hideErrorState() {
    warnMsg.classList.remove("not-hidden");
    warnTag.classList.remove("not-hidden");
    emailInput.classList.remove("border-color");
}

// ===== EVENT HANDLER =====
/**
 * Handles the email submission and validation
 */
function handleEmailSubmission() {
    const email = emailInput.value.trim(); // Trim whitespace
    
    if (!isValidEmail(email)) {
        showErrorState();
    } else {
        hideErrorState();
        // Here you could add code to actually submit the email
        console.log("Valid email submitted:", email);
    }
}

// ===== EVENT LISTENERS =====
// Main button click handler
signButton.addEventListener("click", handleEmailSubmission);

// Optional: Also validate when pressing Enter in the input field
emailInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleEmailSubmission();
    }
});