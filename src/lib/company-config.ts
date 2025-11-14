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
  name: 'Furo Labs',
  displayName: 'Furo Labs',
  tagline: 'Crafting digital experiences that inspire and transform businesses through innovative technology solutions.',
  
  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    email: 'furolabs@gmail.com',
    phone: '+94 (72) 5253-444',
    address: 'M/28, 1st Lane, Isurupura, Malabe',
  },

  // ============================================
  // SOCIAL MEDIA LINKS
  // ============================================
  socialLinks: {
    twitter: '#',
    github: 'https://github.com/FuroLabs',
    linkedin: 'https://www.linkedin.com/company/furolabs',
    instagram: '',
    facebook: '',
  },

  // ============================================
  // BRANDING & DISPLAY
  // ============================================
  branding: {
    logoAlt: 'Furo Labs Logo',
    copyrightYear: new Date().getFullYear(),
    copyrightText: `Copyright (c) ${new Date().getFullYear()} Furo Labs`,
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
    securityEmail: 'furolabs@gmail.com',
    supportEmail: 'furolabs@gmail.com',
    issueReportingEmail: 'furolabs@gmail.com',
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
