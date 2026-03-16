// utils/validator.js

// Validate worker input before creating
export const validateWorker = (worker) => {
  if (!worker) return "Worker data is required";

  const { name, email, phone, skill, location } = worker;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return "Name must be a string of at least 2 characters";
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return "Valid email is required";
  }

  if (!phone || !/^\d{10,15}$/.test(phone)) {
    return "Phone must be 10-15 digits";
  }

  if (!skill || typeof skill !== "string" || skill.trim().length === 0) {
    return "Skill is required";
  }

  if (!location || typeof location !== "string" || location.trim().length === 0) {
    return "Location is required";
  }

  // All validations passed
  return null;
};