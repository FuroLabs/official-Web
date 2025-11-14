/**
 * Company Configuration File
 * 
 * This file centralizes all company-specific information and constants.
 * Update values here to change them across the entire application.
 * 
 * Last Updated: November 15, 2025
 */

export const companyConfig = {
  // ============================================
  // BASIC COMPANY INFORMATION
  // ============================================
  name: 'NevroLabs',
  displayName: 'NevroLabs',
  tagline: 'Crafting digital experiences that inspire and transform businesses through innovative technology solutions.',
  
  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    email: 'nevrolabs@gmail.com',
    phone: '+94 (74) 3288-572',
    address: 'M/28, 1st Lane, Isurupura, Malabe',
  },

  // ============================================
  // SOCIAL MEDIA LINKS
  // ============================================
  socialLinks: {
    twitter: '#',
    github: 'https://github.com/NevroLabs',
    linkedin: '#',
    instagram: '',
    facebook: '',
  },

  // ============================================
  // BRANDING & DISPLAY
  // ============================================
  branding: {
    logoAlt: 'NevroLabs Logo',
    copyrightYear: new Date().getFullYear(),
    copyrightText: `Copyright (c) ${new Date().getFullYear()} NevroLabs`,
  },

  // ============================================
  // LEGAL & BUSINESS INFORMATION
  // ============================================
  legal: {
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms-of-service',
    cookiePolicy: '/cookie-policy',
  },

  // ============================================
  // TEAM INFORMATION (if needed to be centralized)
  // ============================================
  teamInfo: {
    totalMembers: 5,
    foundedYear: 2018,
  },

  // ============================================
  // SECURITY & POLICIES
  // ============================================
  security: {
    securityEmail: 'nevrolabs@gmail.com',
    supportEmail: 'nevrolabs@gmail.com',
    issueReportingEmail: 'nevrolabs@gmail.com',
  },
} as const;

/**
 * Helper function to get company name
 */
export const getCompanyName = () => companyConfig.name;

/**
 * Helper function to get contact email
 */
export const getContactEmail = () => companyConfig.contact.email;

/**
 * Helper function to get contact phone
 */
export const getContactPhone = () => companyConfig.contact.phone;

/**
 * Helper function to get full address
 */
export const getContactAddress = () => companyConfig.contact.address;

/**
 * Helper function to get copyright text
 */
export const getCopyrightText = () => companyConfig.branding.copyrightText;
