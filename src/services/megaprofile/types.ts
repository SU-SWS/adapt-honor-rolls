// @ts-nocheck
/* eslint-disable */
/**
 * ⚠️ DO NOT MODIFY THIS FILE BY HAND! ⚠️
 * It was auto-generated from the megaprofile api OAS json schema using json-schema-to-typescript.
 * If you need to make changes, update the json schema api and re-run the generation script:
 * > npm run megaprofile:generate
 */

export type Id_1 = string;
/**
 * This flag indicates whether the address has been verified by Smartystreets, an address validation tool.
 */
export type AddressVerified = boolean;
/**
 * This flag indicates whether user DOES NOT accept SmartyStreets validation of address OR if the address is international, checkbox = TRUE
 */
export type AddressAccepted = boolean;
/**
 * Indicates the type of address business, home, other business, other home, primary business, seasonal home.
 */
export type AddressType = 'Home' | 'Business';
/**
 * The start date of the student activity.
 */
export type StartDate = string;
/**
 * Field that indicates the area division alphanumeric string (Stanford internal geographic division) for the given address.
 */
export type ADIVGeoCode = string;
/**
 * States the company name associated with the address
 */
export type CompanyName = string;
/**
 * The country associated within a given address.
 */
export type AddressCountry = string;
/**
 * Used to direct correspondence to a particular place.  It is typically used for an andressee who is not at the usual place where he or she would receive correspondence.
 */
export type CareOfLine = string;
/**
 * Local residential or business mailing address, including P. O. Boxes.  Addresses can span three lines by including room or suite number, hall, department, institution, campus, and international addresses with an administrative district or local designation.  We use SmartyStreets to validate domestic and international addresses.
 */
export type StreetAddress1 = string;
/**
 * Local residential or business mailing address, including P. O. Boxes.  Addresses can span three lines by including room or suite number, hall, department, institution, campus, and international addresses with an administrative district or local designation.  We use SmartyStreets to validate domestic and international addresses.
 */
export type StreetAddress2 = string;
/**
 * Local residential or business mailing address, including P. O. Boxes.  Addresses can span three lines by including room or suite number, hall, department, institution, campus, and international addresses with an administrative district or local designation.  We use SmartyStreets to validate domestic and international addresses.
 */
export type StreetAddress3 = string;
/**
 * Per the mailing address standard via the US Postal Service for locations worldwide, including city, town, village, and unincorporated areas.  Distinct from physical address, jurisdiction, or municipality. We use SmartyStreets to validate domestic and international addresses.
 */
export type City = string;
/**
 * Per the mailing address standard via the US Postal Service for locations worldwide.
 * Includes countries with states (e.g., USA, Australia, Brazil, Mexico), countries with provinces (Argentina, Canada, Netherlands, DR Congo).
 * If country is USA or Canada, validation requires exactly 2 characters and cannot be blank.
 * For countries that have neither, this can be null.
 * We use SmartyStreets to validate domestic and international addresses.
 *
 */
export type StateProvince = string;
/**
 * Per the mailing address standard via the US Postal Service for locations worldwide.  Alphanumeric string.  Zip codes are used in the USA.  Postal codes are used worldwide.  We use SmartyStreets to validate domestic and international addresses.
 */
export type ZipPostalCode = string;
/**
 * Object that includes the following data elements - Addresses details of constituent
 */
export type Addresses = Address[];
/**
 * Three-letter alpha-3 country code to use in formatting phone numbers according to local conventions, e.g., FRA to format a number as X XX XX XX XX.
 */
export type ISOCountryCodeAlpha3 = string;
/**
 * A unique identifier for the record for the constituent.
 */
export type ID = string;
/**
 * Encoded SUID. Example - 18364899483. You can call by Encoded SUID. The API responds with the exact result. You may only query one Encoded SUID at a time.
 */
export type EncodedSUID = string;
/**
 * This is the outward-facing type (e.g., alumni, student, parent, staff, organization) of the constituent that can be displayed to other constituents.  This is a rollup of the underlying raw values in CARD (Salesforce).
 */
export type DisplayConstituentType =
  | 'Alumni'
  | 'Faculty'
  | 'Organization'
  | 'Former Student'
  | 'Grandparent'
  | 'Friend'
  | 'Student'
  | 'Staff'
  | 'Postgraduate Study'
  | 'Parent';
/**
 * This is the internal type (e.g., UG Alum, Parent UG) of the constituent that should not be displayed to other constituents directly from CARD (Salesforce).
 */
export type SalesforceConstituentType =
  | 'Grad Alum'
  | 'Parent UG'
  | 'Grad Student'
  | 'Corporate Foundation'
  | 'UG Alum'
  | 'Hosp Staff'
  | 'Univ Staff'
  | 'Grandparent'
  | 'Professional Foundation'
  | 'Non-Grad'
  | 'Friend'
  | 'Personal Foundation'
  | 'Estate - Trust'
  | 'UG Student'
  | 'Cert Holder'
  | 'Faculty'
  | 'Corporation'
  | 'UG & Grad Alum'
  | 'Association'
  | 'Estate - Outright'
  | 'Personal Corporation';
/**
 * Returns whether the constituent type is the primary record type or not depending on our standard hierarchy.  A constituent can have multiple constituent types, but only one primary constittuent type.
 */
export type Primary = boolean;
/**
 * Text string of the Stanford undergraduate social class years of a contact's children and a contact's spouse/partner's children.
 */
export type DegreeStringParent = string;
/**
 * Array of 3 data elements - Display Constituent Type, Primary Flag, Degree String Parent
 */
export type ConstituentTypes = ConstituentType[];
export type Affiliation =
  | 'GSB Alum'
  | 'GSB SEP'
  | 'GSB Life Member'
  | 'GSB Student'
  | 'GSB Faculty'
  | 'GSB Staff'
  | 'GSB Defined Alums and Students'
  | 'Friend'
  | 'SAA Email'
  | 'Student'
  | 'Non-Student'
  | 'SAA Alum'
  | 'Med CRT Graduate'
  | 'Med Alum'
  | 'Med Student'
  | 'Law Alum'
  | 'Law Student'
  | 'EDU Alum'
  | 'EDU Student';
/**
 * Array of affiliations associated with a Constituent
 */
export type Affiliations = Affiliation[];
/**
 * Long text string entered by the constituent to describe her/himself with other constituents as the primary audience (e.g., directories).
 */
export type About = string;
export type DataSource = 'LinkedIn' | 'Web Profile/Registration';
/**
 * Short text string entered by the constituent to describe her/himself with other constituents as the primary audience (e.g., directories).
 */
export type Headline = string;
export type LinkedInURL = string;
export type CareerSupportOffered = 'Yes' | 'No' | 'Graduate or Professional School Only';
export type CareerSupportInterests1 =
  | 'Provide career advice'
  | 'Advise on industry and function trends'
  | 'Help in navigating diversity in career and life'
  | 'Mentor students or young alumni'
  | 'Assist in job, internship, project or job shadowing opportunities'
  | 'Provide graduate or professional school advice'
  | 'Facilitate informational interviewing, networking'
  | 'Conduct mock interviews, critique elevator pitches'
  | 'Consider speaking opportunities (e.g., panels)'
  | 'Engage in academic collaborations';
/**
 * Array of career support interests associated with a Constituent
 */
export type CareerSupportInterests = CareerSupportInterests1[];
/**
 * Array of career support interests associated with a Constituent
 */
export type CareerSupportInterests2 = CareerSupportInterests1[];
export type CommunityAffinity_2 =
  | 'Military Veteran'
  | 'First-generation and/or Low-income'
  | 'LGBTQ+'
  | 'Disabled'
  | 'Neurodiverse'
  | 'Indigenous or Native'
  | 'Asian/Pacific Islander'
  | 'Latino/a/x'
  | 'Black'
  | "Women's Communities"
  | "Baha'i"
  | 'Buddhist'
  | 'Christian'
  | 'Hindu'
  | 'Jewish'
  | 'Muslim'
  | 'Sikh';
/**
 * Returns an array of a constituent's chosen community affinity objects.
 */
export type CommunityAffinities = CommunityAffinities1[];
/**
 * Provide constituent's chosen community affinity.
 */
export type CommunityAffinity =
  | 'Military Veteran'
  | 'First-generation and/or Low-income'
  | 'LGBTQ+'
  | 'Disabled'
  | 'Neurodiverse'
  | 'Indigenous or Native'
  | 'Asian/Pacific Islander'
  | 'Latino/a/x'
  | 'Black'
  | "Women's Communities"
  | "Baha'i"
  | 'Buddhist'
  | 'Christian'
  | 'Hindu'
  | 'Jewish'
  | 'Muslim'
  | 'Sikh';
/**
 * The constituent's Stanford Pass username.
 */
export type StanfordPassUsername = string;
export type EmailExists = boolean;
/**
 * Boolean value indicating true if constituent is one of the following
 * Stanford Alum, current student, parent of a student, faculty or staff member,
 * spouse or partner of an alum or current student or has given a gift to Stanford.
 *
 */
export type StanfordAffiliate = boolean;
/**
 * Professional Suffix of the constituent, MD, MA, Esquire, etc.
 */
export type SuffixProfessional =
  | 'AIA'
  | 'CFA'
  | 'CPA'
  | 'DC'
  | 'DD'
  | 'DDS'
  | 'DMD'
  | 'DMin'
  | 'DO'
  | 'DVM'
  | 'EdD'
  | 'Emerita'
  | 'Emeritus'
  | 'Esq.'
  | 'JD'
  | 'LCSW'
  | 'LICSW'
  | 'LLB'
  | 'LLD'
  | 'M ARCH'
  | 'MA'
  | 'MBA'
  | 'MD'
  | 'MFA'
  | 'MFT'
  | 'MLA'
  | 'MP'
  | 'MPH'
  | 'MS'
  | 'MSM'
  | 'MSW'
  | 'OBE'
  | 'OD'
  | 'PE'
  | 'PhD'
  | 'Pharm D'
  | 'Ret.'
  | 'RN'
  | 'SJ'
  | 'USA'
  | 'USAF'
  | 'USAFR'
  | 'USAR'
  | 'USCG'
  | 'USCGR'
  | 'USMC'
  | 'USMCR'
  | 'USN'
  | 'USNR'
  | 'USA, Ret.'
  | 'USAF, Ret.'
  | 'USAFR, Ret.'
  | 'USAR, Ret.'
  | 'USCG, Ret.'
  | 'USCGR, Ret.'
  | 'USMC, Ret.'
  | 'USMCR, Ret.'
  | 'USN, Ret.'
  | 'USNR, Ret.';
/**
 * Middle Name of the constituent
 */
export type MiddleName = string;
/**
 * This is the URL for the profile photo of the constituent.
 */
export type ProfilePhotoURL = string;
/**
 * The Last Name is the name constituents expect to see last in the construction of their full name, most often as the surname / family name.  Some may place forename / given name here based on Eastern convention.
 */
export type LastName = string;
/**
 * Formal start to a name, Mr., Ms., Dr., etc., including military titles
 */
export type Prefix =
  | 'Mr.'
  | 'Ms.'
  | 'Mrs.'
  | 'Miss'
  | 'Mr/s.'
  | 'Mx.'
  | 'Dr.'
  | 'Admiral'
  | 'Captain'
  | 'Colonel'
  | 'Commander'
  | 'General'
  | 'Lieutenant'
  | 'Lieutenant Colonel'
  | 'Major'
  | 'Professor'
  | 'Rabbi'
  | 'The Honorable'
  | 'The Reverend';
/**
 * The set of third-person pronouns that an individual prefers that others use in order to identify that person's gender (or lack thereof).
 */
export type Pronouns = string;
/**
 * The First Name is the name constituents expect to see first in the construction of their full name, most often as the forename / given name. Some may place surname / family name here based on Eastern convention.
 */
export type FirstName = string;
/**
 * Constituent emailType selection .
 */
export type EmailType = 'Business Email' | 'GSB Email' | 'Home Email' | 'Other Email' | 'SAA Email';
/**
 * Personal Suffix of the constituent, Jr., Sr., etc.
 */
export type SuffixPersonal = 'Jr.' | 'Sr.' | 'II' | 'III' | 'IV' | null;
/**
 * Valid email address in standard format.
 */
export type EmailAddress = string;
/**
 * Array that includes one object for each constituent emails
 */
export type Emails = Email[];
/**
 * Date of birth upon matriculation to Stanford, in ISO 8601 standard date/time format, e.g., 1994-11-05
 */
export type BirthDate = string;
/**
 * Constituent phonetype selection (The network associated with the phone. For example Home.)
 */
export type PhoneNumberType = 'Business Phone' | 'Home Phone' | 'Mobile';
export type RaceEthnicityFromRegistrar = string;
export type SelfReportedEthnicity =
  | 'Custom Self-Identified Race/Ethnicity'
  | 'American Indian or Alaska Native'
  | 'Asian'
  | 'Black or African American'
  | 'Hispanic or Latino'
  | 'Native Hawaiian or Other Pacific Islander'
  | 'White'
  | 'Decline to State'
  | 'Chinese'
  | 'Filipino'
  | 'Japanese'
  | 'Korean'
  | 'Latin/Latino'
  | 'Mexican/Chicano'
  | 'Puerto Rican'
  | 'South Asian'
  | 'Vietnamese'
  | 'American Indian (Canada)'
  | 'American Indian (Central/South)'
  | 'Pacific Islander'
  | 'White (European)'
  | 'White (Middle Eastern)'
  | 'White (North African)';
export type SelfReportedEthnicityCustom = string;
/**
 * This field identifies the marital status for a constituent.
 */
export type MaritalStatus =
  | 'Married'
  | 'Widowed'
  | 'Single'
  | 'Domestic Partnered'
  | 'Marital Unknown'
  | 'Married At Death'
  | 'Formerly Married/Partnered';
export type DigitalName = string;
/**
 * The constituents preferred first name, which may differ from the actual first name (e.g., nickname, those who go by a middle name, shortened version of a first name, and more).
 */
export type MyFriendsCallMe = string;
/**
 * Calculated string reflecting the constituent's preferred full name to be used in print mailings.
 */
export type EnvelopeName = string;
/**
 * The name recorded by Stanford's Registrar when the constituent first matriculated.
 */
export type RegistrationNameString = string;
/**
 * Text string of a contact's Stanford degrees (without certificates). Undergrad social class year is displayed. For grad alums the degree code is also included.
 */
export type DegreeStringShort = string;
/**
 * Unverified freeform text field for users to input degree information as part of the registration process.
 */
export type UnverifiedStanfordDegrees = string;
/**
 * Indicates the status of the constituent record - active, inactive, deceased, duplicate.
 */
export type ConstituentStatus = 'Deceased' | 'Active';
/**
 * The date the person passed away, according to our system of record.
 */
export type DeceasedDate = string;
/**
 * Identifies whether the constituent is a person or an organization.
 */
export type LegalEntity = 'Person';
/**
 * Calculated string reflecting the constituent's preferred full name to be used in print mailings.
 */
export type EnvelopeName1 = string;
/**
 * Unverified social class year inputted by the user as part of the registration process.
 */
export type UnverifiedSocialClassYear = string;
/**
 * Unique numeric ID generated in Student PeopleSoft system to identify educational institutions.
 */
export type InstitutionCode = string;
/**
 * The name of an educational institution; either college/university or secondary school.
 */
export type InstitutionName = string;
/**
 * This is the name of the non-Stanford institution if it does not already exist as an 'Other Education Institution' account in CARD.
 */
export type OtherInstitutionName = string;
/**
 * The degree or certificate associated with a Program Enrollment record in CARD (Salesforce). (Picklist accomodates degrees found on diplomas, plus a handful of fabricated values such as Med Fellow, Certificate, Other Non-Stanford Masters Degree, etc.)
 */
export type DegreeCertificate =
  | '01 - Other non-Stanford Undergraduate Degree'
  | '02 - Other non-Stanford Masters Degree'
  | '03 - Other non-Stanford Doctoral Degree'
  | 'AB - Bachelor of Arts'
  | 'AM - Master of Arts'
  | 'BA - Bachelor of Arts'
  | 'BAR - Bachelor of Architecture'
  | 'BAS - Bachelor of Arts & Science'
  | 'B - Bachelor Undeclared'
  | 'BS - Bachelor of Science'
  | 'BSN - Bachelor of Science in Nursing'
  | 'CRT - Certificate Program'
  | 'DDS - Doctor of Dental Science'
  | 'DMA - Doctor of Musical Arts'
  | 'DMD - Doctor of Dental Medicine'
  | 'DNP - Doctor of Nursing Practice'
  | 'DO - Doctor of Osteopathic Medicine'
  | 'DPM - Doctor of Podiatric Medicine'
  | 'DVM - Doctor of Veterinary Medicine'
  | 'EDD - Doctor of Education'
  | 'EDM - Master of Education'
  | 'EDS - Educational Specialist'
  | 'ENG - Engineer'
  | 'IA - Industrial Administration'
  | 'JD - Doctor of Jurisprudence'
  | 'JM - Master of Jurisprudence'
  | 'JSD - Doctor of the Science of Law'
  | 'JSM - Master of Science of Law'
  | 'LLB - Bachelor of Laws'
  | 'LLM - Master of Laws'
  | 'MA - Master of Arts'
  | 'MAR - Master of Architecture'
  | 'MAT - Master of Arts in Teaching'
  | 'MBA - Master of Business Administration'
  | 'MCRP - Master of City and Regional Planning'
  | 'MD - Doctor of Medicine'
  | 'MDIV - Master of Divinity'
  | 'MEA - Master of Education Administration'
  | 'MFA - Master of Fine Arts'
  | 'MF - Med Fellow'
  | 'MLA - Master of Liberal Arts'
  | 'MLIS - Master of Library and Information Science'
  | 'MLS - Master of Legal Studies'
  | 'MPA - Master of Public Administration'
  | 'MPH - Master of Public Health'
  | 'MPP - Master of Public Policy'
  | 'MRP - Master of Regional Planning'
  | 'MSD - Master of Scientific Didactics'
  | 'MS - Master of Science'
  | 'MSM - Master of Science in Management'
  | 'MSN - Master of Science in Nursing'
  | 'MSW - Master of Social Work'
  | 'PD - PostDoc'
  | 'PHD - Doctor of Philosophy'
  | 'RN - Registered Nurse'
  | 'SLN-Sloan';
/**
 * An attribute of the Degree/Certificate (Bachelor = 1, Master = 2, Doctoral =3 or Certificate = 4).
 */
export type DegreeLevel = '1 - Undergraduate' | '2 - Masters' | '3 - Doctoral' | '4 - Certificate';
/**
 * The Social Class Year represents the class the constituent affiliates with, and may vary from actual class year when the degree was conferred.
 * Must be a number between 1891 and (current year +10)
 *
 */
export type DegreeSocialClassYear = string;
/**
 * The Stanford school (e.g., Engineering) that the degree was received from.
 */
export type School = string;
/**
 * Unique alphanumeric value to identify the academic major for a degree.
 */
export type MajorCode = string;
/**
 * The description of an academic major.
 */
export type Major = string;
/**
 * This is the name of the non-Stanford major if it does not already exist as an 'Major' in CARD.
 */
export type OtherMajor = string;
/**
 * The encoded SUID is a transformed version of the university ID (SUID) into an unique 11 or 12 digit identifier. The Advisor Encoded ID is the encoded ID of the Advisor associated with a contact's degree (Program Enrollment) record.
 */
export type DegreeAdvisorEncodedID = string;
/**
 * The name of the Advisor associated with the Degree Advisor Encoded ID.
 */
export type DegreeAdvisorName = string;
/**
 * A flag (true/false) indicating whether a constituent completed the relevant degree or not, i.e., successfully graduated.
 */
export type NonGrad = boolean;
/**
 * For non-degree holders, indicates the number of quarters attended for that degree.
 */
export type NumberOfQuarters = number;
/**
 * Structured program of study within an undergraduate major or graduate program.
 */
export type Concentration = string;
/**
 * Array that includes one object for each constituent degree (Stanford or non-Stanford), each including 19 data elements.
 */
export type Degrees = Degree[];
/**
 * Array that includes one object for each constituent emails
 */
export type Emails1 = Email1[];
/**
 * A unique identifier for the record for the constituent.
 */
export type ID1 = string;
/**
 * Largely personal interests, e.g., hiking, photography, yoga, but also including professional passions e.g., entrepreneurship.
 */
export type InterestDescription =
  | '3D Printing'
  | 'Acting'
  | 'Aerospace'
  | 'Agriculture'
  | 'Aikido'
  | 'Algorithms'
  | 'Analytics'
  | 'Animals'
  | 'Animation'
  | 'Antiques'
  | 'Archery'
  | 'Architecture'
  | 'Art'
  | 'Artificial Intelligence'
  | 'Asia'
  | 'Astronomy'
  | 'Astrophysics'
  | 'Athletics'
  | 'Aviation'
  | 'Ayurveda'
  | 'Backpacking'
  | 'Badminton'
  | 'Baking'
  | 'Ballet'
  | 'Banking'
  | 'Baseball'
  | 'Basketball'
  | 'BBQ'
  | 'Beer'
  | 'Bicycling'
  | 'Biking'
  | 'Biotechnology'
  | 'Birdwatching'
  | 'Black Lives Matter'
  | 'Blockchain'
  | 'Blogging'
  | 'Board Games'
  | 'Boating'
  | 'Bodysurfing'
  | 'Bonsai'
  | 'Books'
  | 'Bouldering'
  | 'Bowhunting'
  | 'Bowling'
  | 'Boy Scouts'
  | 'Brazil'
  | 'Brewing'
  | 'Bridge'
  | 'Buddhism'
  | 'Burning Man'
  | 'Business Development'
  | 'Calligraphy'
  | 'Camping'
  | 'Canoeing'
  | 'Carpentry'
  | 'Cars'
  | 'Cartooning'
  | 'Cats'
  | 'Cello'
  | 'Charity'
  | 'Chemistry'
  | 'Chess'
  | 'China'
  | 'Christianity'
  | 'Church'
  | 'Cinema'
  | 'Clarinet'
  | 'Climate Change'
  | 'Climbing'
  | 'Cloud Computing'
  | 'Coaching'
  | 'Coffee'
  | 'Comedy'
  | 'Community Service'
  | 'Computer Science'
  | 'Computers'
  | 'Concerts'
  | 'Conservation'
  | 'Consulting'
  | 'Cooking'
  | 'Costuming'
  | 'Creative Writing'
  | 'Cricket'
  | 'Crossfit'
  | 'Crosswords'
  | 'Culture'
  | 'Cybersecurity'
  | 'Cycling'
  | 'Dancing'
  | 'Deep Learning'
  | 'Design'
  | 'Dining'
  | 'Diplomacy'
  | 'Diversity'
  | 'Diving'
  | 'DJing'
  | 'Dog Training'
  | 'Dogs'
  | 'Drawing'
  | 'Driving'
  | 'Drumming'
  | 'eCommerce'
  | 'Ecology'
  | 'Economics'
  | 'Education'
  | 'Energy'
  | 'Entrepreneurship'
  | 'Environment'
  | 'Equestrian'
  | 'Ethics'
  | 'Evolution'
  | 'Exercise'
  | 'Faith'
  | 'Family'
  | 'Fashion'
  | 'Feminism'
  | 'Fencing'
  | 'Fiction'
  | 'Figure Skating'
  | 'Finance'
  | 'Fishing'
  | 'Fitness'
  | 'Flute'
  | 'Fly Fishing'
  | 'Flying'
  | 'Food'
  | 'Football'
  | 'France'
  | 'Fundraising'
  | 'Game Theory'
  | 'Gaming'
  | 'Gardening'
  | 'Gastronomy'
  | 'Genealogy'
  | 'General Management'
  | 'Genetics'
  | 'Genomics'
  | 'Geocaching'
  | 'Geology'
  | 'Germany'
  | 'Golf'
  | 'Government'
  | 'Grilling'
  | 'Guitar'
  | 'Health'
  | 'Healthcare'
  | 'High Tech'
  | 'Hiking'
  | 'History'
  | 'HIV/AIDS'
  | 'Hockey'
  | 'Horses'
  | 'Horticulture'
  | 'Human Rights'
  | 'Humor'
  | 'Hunting'
  | 'Ice Hockey'
  | 'Illustration'
  | 'Improv'
  | 'Inline Skating'
  | 'Innovation'
  | 'Insurance'
  | 'International Development'
  | 'International Relations'
  | 'International Travel'
  | 'Internet'
  | 'Investing'
  | 'Jazz'
  | 'Jogging'
  | 'Journalism'
  | 'Judaism'
  | 'Judo'
  | 'Juggling'
  | 'Karaoke'
  | 'Karate'
  | 'Kayaking'
  | 'Kendo'
  | 'Kickboxing'
  | 'Kitesurfing'
  | 'Knitting'
  | 'Krav Maga'
  | 'Lgbtq+'
  | 'Lacrosse'
  | 'Languages'
  | 'Latin America'
  | 'Law'
  | 'Leadership'
  | 'Linguistics'
  | 'Literature'
  | 'Litigation'
  | 'Logistics'
  | 'Machine Learning'
  | 'Maintenance'
  | 'Marathon'
  | 'Marketing'
  | 'Martial Arts'
  | 'Mathematics'
  | 'Media'
  | 'Medical Devices'
  | 'Medicial Devices'
  | 'Medicine'
  | 'Meditation'
  | 'Mentoring'
  | 'Metaphysics'
  | 'Meteorology'
  | 'Middle East'
  | 'Military'
  | 'Mindfulness'
  | 'Minority Rights'
  | 'Motorcycles'
  | 'Mountain Biking'
  | 'Mountain Climbing'
  | 'Mountaineering'
  | 'Movies'
  | 'Museums'
  | 'Music'
  | 'Musical Theater'
  | 'Nanobiotechnology'
  | 'Nanocomposites'
  | 'Nanoelectronics'
  | 'Nanofabrication'
  | 'Nanomaterials'
  | 'Nanomedicine'
  | 'Nanoparticles'
  | 'Nanopattering'
  | 'Nanophotonics'
  | 'Nanoscience'
  | 'Nanostructures'
  | 'Nanotechnology'
  | 'Nanotoxicity'
  | 'Nanotoxicity'
  | 'Nature'
  | 'Needlepoint'
  | 'Networking'
  | 'Neuroscience'
  | 'Nonprofit'
  | 'Nutrition'
  | 'Opera'
  | 'Optics'
  | 'Optimization'
  | 'Orchids'
  | 'Organizational Behavior'
  | 'Origami'
  | 'Outdoors'
  | 'Painting'
  | 'Paragliding'
  | 'Parenting'
  | 'Percussion'
  | 'Permaculture'
  | 'Pets'
  | 'Philanthropy'
  | 'Philosophy'
  | 'Photography'
  | 'Physics'
  | 'Piano'
  | 'Pilates'
  | 'Ping Pong'
  | 'Plants'
  | 'Poetry'
  | 'Poker'
  | 'Policy'
  | 'Politics'
  | 'Polo'
  | 'Privacy'
  | 'Product Management'
  | 'Psychiatry'
  | 'Psychology'
  | 'Public Speaking'
  | 'Publishing'
  | 'Python'
  | 'Quantum Physics'
  | 'Quilting'
  | 'Racquetball'
  | 'Railroads'
  | 'Reading'
  | 'Real Estate'
  | 'Religion'
  | 'Remote Sensing'
  | 'Research'
  | 'Retail'
  | 'Robotics'
  | 'Rollerblading'
  | 'Rotary'
  | 'Rowing'
  | 'Rugby'
  | 'Running'
  | 'Sailing'
  | 'Science'
  | 'Science Fiction'
  | 'Screenwriting'
  | 'Scuba Diving'
  | 'Sculpture'
  | 'Sewing'
  | 'Shakespeare'
  | 'Shopping'
  | 'Singing'
  | 'Skateboarding'
  | 'Skiing'
  | 'Skydiving'
  | 'Snorkeling'
  | 'Snowboarding'
  | 'Soccer'
  | 'Social Justice'
  | 'Social Media'
  | 'Sociology'
  | 'Softball'
  | 'Software Development'
  | 'Solar Energy'
  | 'Songwriting'
  | 'Spinning'
  | 'Spirituality'
  | 'Sports'
  | 'Squash'
  | 'Statistics'
  | 'Stocks'
  | 'Strategy'
  | 'Surfing'
  | 'Sustainability'
  | 'Swimming'
  | 'Tae Kwon Do'
  | 'Teaching'
  | 'Technology'
  | 'Television'
  | 'Tennis'
  | 'Theater'
  | 'Theology'
  | 'Travel'
  | 'Trekking'
  | 'Triathlon'
  | 'Trivia'
  | 'Trumpet'
  | 'Ultimate Frisbee'
  | 'Veganism'
  | 'Venture Capital'
  | 'Video Games'
  | 'Viola'
  | 'Violin'
  | 'Volleyball'
  | 'Volunteering'
  | 'Wakeboarding'
  | 'Walking'
  | 'Water Polo'
  | 'Waterskiing'
  | 'Weight Training'
  | 'White Water Rafting'
  | 'Wildlife'
  | 'Windsurfing'
  | 'Wine'
  | 'Woodworking'
  | 'Wrestling'
  | 'Writing'
  | 'Yachting'
  | 'Yoga';
/**
 * Object that includes (largely personal) interest data related to the constituent.  Contains the following data elements - Interests
 */
export type Interests = Interest[];
/**
 * Provide (largely personal) interest data related to the constituent.
 */
export type Interest1 =
  | '3D Printing'
  | 'Acting'
  | 'Aerospace'
  | 'Agriculture'
  | 'Aikido'
  | 'Algorithms'
  | 'Analytics'
  | 'Animals'
  | 'Animation'
  | 'Antiques'
  | 'Archery'
  | 'Architecture'
  | 'Art'
  | 'Artificial Intelligence'
  | 'Asia'
  | 'Astronomy'
  | 'Astrophysics'
  | 'Athletics'
  | 'Aviation'
  | 'Ayurveda'
  | 'Backpacking'
  | 'Badminton'
  | 'Baking'
  | 'Ballet'
  | 'Banking'
  | 'Baseball'
  | 'Basketball'
  | 'BBQ'
  | 'Beer'
  | 'Bicycling'
  | 'Biking'
  | 'Biotechnology'
  | 'Birdwatching'
  | 'Black Lives Matter'
  | 'Blockchain'
  | 'Blogging'
  | 'Board Games'
  | 'Boating'
  | 'Bodysurfing'
  | 'Bonsai'
  | 'Books'
  | 'Bouldering'
  | 'Bowhunting'
  | 'Bowling'
  | 'Boy Scouts'
  | 'Brazil'
  | 'Brewing'
  | 'Bridge'
  | 'Buddhism'
  | 'Burning Man'
  | 'Business Development'
  | 'Calligraphy'
  | 'Camping'
  | 'Canoeing'
  | 'Carpentry'
  | 'Cars'
  | 'Cartooning'
  | 'Cats'
  | 'Cello'
  | 'Charity'
  | 'Chemistry'
  | 'Chess'
  | 'China'
  | 'Christianity'
  | 'Church'
  | 'Cinema'
  | 'Clarinet'
  | 'Climate Change'
  | 'Climbing'
  | 'Cloud Computing'
  | 'Coaching'
  | 'Coffee'
  | 'Comedy'
  | 'Community Service'
  | 'Computer Science'
  | 'Computers'
  | 'Concerts'
  | 'Conservation'
  | 'Consulting'
  | 'Cooking'
  | 'Costuming'
  | 'Creative Writing'
  | 'Cricket'
  | 'Crossfit'
  | 'Crosswords'
  | 'Culture'
  | 'Cybersecurity'
  | 'Cycling'
  | 'Dancing'
  | 'Deep Learning'
  | 'Design'
  | 'Dining'
  | 'Diplomacy'
  | 'Diversity'
  | 'Diving'
  | 'DJing'
  | 'Dog Training'
  | 'Dogs'
  | 'Drawing'
  | 'Driving'
  | 'Drumming'
  | 'eCommerce'
  | 'Ecology'
  | 'Economics'
  | 'Education'
  | 'Energy'
  | 'Entrepreneurship'
  | 'Environment'
  | 'Equestrian'
  | 'Ethics'
  | 'Evolution'
  | 'Exercise'
  | 'Faith'
  | 'Family'
  | 'Fashion'
  | 'Feminism'
  | 'Fencing'
  | 'Fiction'
  | 'Figure Skating'
  | 'Finance'
  | 'Fishing'
  | 'Fitness'
  | 'Flute'
  | 'Fly Fishing'
  | 'Flying'
  | 'Food'
  | 'Football'
  | 'France'
  | 'Fundraising'
  | 'Game Theory'
  | 'Gaming'
  | 'Gardening'
  | 'Gastronomy'
  | 'Genealogy'
  | 'General Management'
  | 'Genetics'
  | 'Genomics'
  | 'Geocaching'
  | 'Geology'
  | 'Germany'
  | 'Golf'
  | 'Government'
  | 'Grilling'
  | 'Guitar'
  | 'Health'
  | 'Healthcare'
  | 'High Tech'
  | 'Hiking'
  | 'History'
  | 'HIV/AIDS'
  | 'Hockey'
  | 'Horses'
  | 'Horticulture'
  | 'Human Rights'
  | 'Humor'
  | 'Hunting'
  | 'Ice Hockey'
  | 'Illustration'
  | 'Improv'
  | 'Inline Skating'
  | 'Innovation'
  | 'Insurance'
  | 'International Development'
  | 'International Relations'
  | 'International Travel'
  | 'Internet'
  | 'Investing'
  | 'Jazz'
  | 'Jogging'
  | 'Journalism'
  | 'Judaism'
  | 'Judo'
  | 'Juggling'
  | 'Karaoke'
  | 'Karate'
  | 'Kayaking'
  | 'Kendo'
  | 'Kickboxing'
  | 'Kitesurfing'
  | 'Knitting'
  | 'Krav Maga'
  | 'Lgbtq+'
  | 'Lacrosse'
  | 'Languages'
  | 'Latin America'
  | 'Law'
  | 'Leadership'
  | 'Linguistics'
  | 'Literature'
  | 'Litigation'
  | 'Logistics'
  | 'Machine Learning'
  | 'Maintenance'
  | 'Marathon'
  | 'Marketing'
  | 'Martial Arts'
  | 'Mathematics'
  | 'Media'
  | 'Medical Devices'
  | 'Medicial Devices'
  | 'Medicine'
  | 'Meditation'
  | 'Mentoring'
  | 'Metaphysics'
  | 'Meteorology'
  | 'Middle East'
  | 'Military'
  | 'Mindfulness'
  | 'Minority Rights'
  | 'Motorcycles'
  | 'Mountain Biking'
  | 'Mountain Climbing'
  | 'Mountaineering'
  | 'Movies'
  | 'Museums'
  | 'Music'
  | 'Musical Theater'
  | 'Nanobiotechnology'
  | 'Nanocomposites'
  | 'Nanoelectronics'
  | 'Nanofabrication'
  | 'Nanomaterials'
  | 'Nanomedicine'
  | 'Nanoparticles'
  | 'Nanopattering'
  | 'Nanophotonics'
  | 'Nanoscience'
  | 'Nanostructures'
  | 'Nanotechnology'
  | 'Nanotoxicity'
  | 'Nature'
  | 'Needlepoint'
  | 'Networking'
  | 'Neuroscience'
  | 'Nonprofit'
  | 'Nutrition'
  | 'Opera'
  | 'Optics'
  | 'Optimization'
  | 'Orchids'
  | 'Organizational Behavior'
  | 'Origami'
  | 'Outdoors'
  | 'Painting'
  | 'Paragliding'
  | 'Parenting'
  | 'Percussion'
  | 'Permaculture'
  | 'Pets'
  | 'Philanthropy'
  | 'Philosophy'
  | 'Photography'
  | 'Physics'
  | 'Piano'
  | 'Pilates'
  | 'Ping Pong'
  | 'Plants'
  | 'Poetry'
  | 'Poker'
  | 'Policy'
  | 'Politics'
  | 'Polo'
  | 'Privacy'
  | 'Product Management'
  | 'Psychiatry'
  | 'Psychology'
  | 'Public Speaking'
  | 'Publishing'
  | 'Python'
  | 'Quantum Physics'
  | 'Quilting'
  | 'Racquetball'
  | 'Railroads'
  | 'Reading'
  | 'Real Estate'
  | 'Religion'
  | 'Remote Sensing'
  | 'Research'
  | 'Retail'
  | 'Robotics'
  | 'Rollerblading'
  | 'Rotary'
  | 'Rowing'
  | 'Rugby'
  | 'Running'
  | 'Sailing'
  | 'Science'
  | 'Science Fiction'
  | 'Screenwriting'
  | 'Scuba Diving'
  | 'Sculpture'
  | 'Sewing'
  | 'Shakespeare'
  | 'Shopping'
  | 'Singing'
  | 'Skateboarding'
  | 'Skiing'
  | 'Skydiving'
  | 'Snorkeling'
  | 'Snowboarding'
  | 'Soccer'
  | 'Social Justice'
  | 'Social Media'
  | 'Sociology'
  | 'Softball'
  | 'Software Development'
  | 'Solar Energy'
  | 'Songwriting'
  | 'Spinning'
  | 'Spirituality'
  | 'Sports'
  | 'Squash'
  | 'Statistics'
  | 'Stocks'
  | 'Strategy'
  | 'Surfing'
  | 'Sustainability'
  | 'Swimming'
  | 'Tae Kwon Do'
  | 'Teaching'
  | 'Technology'
  | 'Television'
  | 'Tennis'
  | 'Theater'
  | 'Theology'
  | 'Travel'
  | 'Trekking'
  | 'Triathlon'
  | 'Trivia'
  | 'Trumpet'
  | 'Ultimate Frisbee'
  | 'Veganism'
  | 'Venture Capital'
  | 'Video Games'
  | 'Viola'
  | 'Violin'
  | 'Volleyball'
  | 'Volunteering'
  | 'Wakeboarding'
  | 'Walking'
  | 'Water Polo'
  | 'Waterskiing'
  | 'Weight Training'
  | 'White Water Rafting'
  | 'Wildlife'
  | 'Windsurfing'
  | 'Wine'
  | 'Woodworking'
  | 'Wrestling'
  | 'Writing'
  | 'Yachting'
  | 'Yoga';
/**
 * A unique identifier for the record for the constituent.
 */
export type ID2 = string;
/**
 * The name of the language that the constituent has listed in their profile, based on the ISO 639-3 standard list of values.
 */
export type LanguageDescription = string;
/**
 * ISO language code that the constituent has listed in their profile, based on the ISO 639-3 standard list of values.
 */
export type ISOLanguageCode = string;
/**
 * The level at which the constituent speaks the language being referenced, aligned to LinkedIn's taxonomy.  Values include - Elementary, Limited Working, Professional Working, Full Professional, Native or Bilingual
 */
export type ProficiencyLevel =
  | 'ELEMENTARY'
  | 'NATIVE_OR_BILINGUAL'
  | 'FULL_PROFESSIONAL'
  | 'LIMITED_WORKING'
  | 'PROFESSIONAL_WORKING'
  | 'NONE';
/**
 * Object that includes data related to the language expertise for the constituent.  Contains the following data elements - LanguageISOCode, Proficiency Level
 */
export type Languages = Language[];
/**
 * A unique identifier for the record for the constituent.
 */
export type ID3 = string;
/**
 * A unique identifier for the record for the constituent.
 */
export type PhoneNumberCommunicationMethodID = string;
/**
 * Unformatted phone number string.
 */
export type PhoneNumber1 = string;
/**
 * Three-letter alpha-3 country code to use in formatting phone numbers according to local conventions, e.g., FRA to format a number as X XX XX XX XX.
 */
export type ISOCountryCodeAlpha31 = string;
/**
 * Array that includes one object for each constituent phones
 */
export type PhoneNumbers = PhoneNumber[];
/**
 * Unformatted phone number string.
 */
export type PhoneNumber3 = string;
/**
 * The position type that the constituent has listed in their profile.
 */
export type Type =
  | 'Advisory Board Member'
  | 'Board Member'
  | 'Business Association'
  | 'Consultant'
  | 'Employee'
  | 'Intern'
  | 'Founder'
  | 'Owner'
  | 'Part-Time Employee'
  | 'Volunteer'
  | 'Stanford University Faculty'
  | 'Stanford University Hospital Staff'
  | 'Stanford University Staff'
  | 'Stanford University Fellow';
/**
 * Unique numeric ID generated.
 */
export type OrganizationCode = string;
/**
 * Organization not in Card.
 */
export type OrganizationNotInCARD = string;
/**
 * This flag indicates whether the employement is primary.
 */
export type PrimaryEmployment = boolean;
/**
 * Title of the Job.
 */
export type JobTitle = string;
/**
 * Department Name.
 */
export type Department = string;
/**
 * This is a text based description of the position.
 */
export type PositionDescription = string;
/**
 * This is the LinkedIn Organization ID that is associated with the organization code for a given position.
 */
export type LinkedInOrganizationId = string;
/**
 * This flag indicates whether the Constitutent is Self Employed.
 */
export type SelfEmployed = boolean;
/**
 * This flag indicates whether the Constitutent is Retired.
 */
export type RetiredEmployee = boolean;
/**
 * Field that indicates the most recent starting month that this  address was used for this constituent.
 */
export type StartMonth = string;
/**
 * Field that indicates the most recent starting year that this address was used for this constituent.
 */
export type StartYear = string;
/**
 * Field that indicates the most recent ending month that this address was used for this constituent.
 */
export type EndMonth = string;
/**
 * Field that indicates the most recent ending year that this     address was used for this constituent.
 */
export type EndYear = string;
/**
 * Field Speciatlity
 */
export type FieldOfSpeciality = string;
/**
 * Returns an array of employment position objects, including title, department, organization, and more.
 */
export type Positions = Positions1[];
export type DataSource1 = 'LinkedIn' | 'Web Profile/Registration';
/**
 * Field that indicates the most recent starting month that this  address was used for this constituent.
 */
export type StartMonth1 = string;
/**
 * Field that indicates the most recent starting year that this address was used for this constituent.
 */
export type StartYear1 = string;
/**
 * Field that indicates the most recent ending month that this address was used for this constituent.
 */
export type EndMonth1 = string;
/**
 * Field that indicates the most recent ending year that this     address was used for this constituent.
 */
export type EndYear1 = string;
/**
 * Field Speciatlity
 */
export type FieldOfSpeciality1 = string;
/**
 * Field Speciatlity
 */
export type FieldOfSpeciality2 = string;
/**
 * Field Speciatlity
 */
export type FieldOfSpeciality3 = string;
export type ShowBirthMonthDay = boolean;
export type ShowSelfReportedEthnicity = boolean;
export type ShowHomePhone = boolean;
export type ShowMobilePhone = boolean;
export type ShowOtherEmail = boolean;
export type ShowRelationships = boolean;
export type ShowBusinessEmail = boolean;
export type ShowBusinessAddress = boolean;
export type ShowBusinessPhone = boolean;
export type ShowCurrentPositions = boolean;
export type ShowPastPositions = boolean;
export type ShowBoardPositions = boolean;
export type ShowNonStanfordDegrees = boolean;
export type ShowRegistrationName = boolean;
export type ShowStanfordDegrees = boolean;
export type ShowStanfordDegreeSocialClassYears = boolean;
export type ShowVarsitySports = boolean;
export type ShowStudentActivities = boolean;
export type ShowStudentResidences = boolean;
export type ShowPronouns = boolean;
export type ShowAbout = boolean;
export type ShowHeadline = boolean;
export type ShowSAAEmail = boolean;
export type ShowGSBEmail = boolean;
export type ShowHomeEmail = boolean;
export type ShowLanguages = boolean;
export type ShowURLs = boolean;
export type ShowCommunityAffinities = boolean;
export type ShowSkillsAndSpecialties = boolean;
export type ShowInterests = boolean;
export type ShowHomeLocation = boolean;
export type Anonymity = boolean;
/**
 * Describes how the Related Contact is connected to the Contact.
 */
export type FamilyRelationshipType =
  | 'Child'
  | 'Spouse/Partner'
  | 'Parent'
  | 'Cousin'
  | 'Grandparent'
  | 'Grandchild'
  | 'Aunt/Uncle'
  | 'Niece/Nephew'
  | 'Great Grandchild'
  | 'Great Grandparent'
  | 'Relative'
  | 'Sibling'
  | 'Significant Other'
  | 'Step-child'
  | 'Step-parent'
  | 'Guest';
/**
 * Returns an array of personal relationship objects, including spouse, children, and more.
 */
export type Relationships = Relationship[];
/**
 * Formal start to a name, Mr., Ms., Dr., etc., including military titles
 */
export type Prefix1 =
  | 'Mr.'
  | 'Ms.'
  | 'Mrs.'
  | 'Miss'
  | 'Mr/s.'
  | 'Mx.'
  | 'Dr.'
  | 'Admiral'
  | 'Captain'
  | 'Colonel'
  | 'Commander'
  | 'General'
  | 'Lieutenant'
  | 'Lieutenant Colonel'
  | 'Major'
  | 'Professor'
  | 'Rabbi'
  | 'The Honorable'
  | 'The Reverend';
/**
 * The First Name is the name constituents expect to see first in the construction of their full name, most often as the forename / given name. Some may place surname / family name here based on Eastern convention.
 */
export type RelatedContactFirstName = string;
/**
 * Middle Name of the constituent
 */
export type RelatedContactMiddleName = string;
/**
 * The Last Name is the name constituents expect to see last in the construction of their full name, most often as the surname / family name.  Some may place forename / given name here based on Eastern convention.
 */
export type RelatedContactLastName = string;
/**
 * Personal Suffix of the constituent, Jr., Sr., etc.
 */
export type SuffixPersonal1 = 'Jr.' | 'Sr.' | 'II' | 'III' | 'IV';
/**
 * Professional Suffix of the constituent, MD, MA, Esquire, etc.
 */
export type SuffixProfessional1 =
  | 'AIA'
  | 'CFA'
  | 'CPA'
  | 'DC'
  | 'DD'
  | 'DDS'
  | 'DMD'
  | 'DMin'
  | 'DO'
  | 'DVM'
  | 'EdD'
  | 'Emerita'
  | 'Emeritus'
  | 'Esq.'
  | 'JD'
  | 'LCSW'
  | 'LICSW'
  | 'LLB'
  | 'LLD'
  | 'M ARCH'
  | 'MA'
  | 'MBA'
  | 'MD'
  | 'MFA'
  | 'MFT'
  | 'MLA'
  | 'MP'
  | 'MPH'
  | 'MS'
  | 'MSM'
  | 'MSW'
  | 'OBE'
  | 'OD'
  | 'PE'
  | 'PhD'
  | 'Pharm D'
  | 'Ret.'
  | 'RN'
  | 'SJ'
  | 'USA'
  | 'USAF'
  | 'USAFR'
  | 'USAR'
  | 'USCG'
  | 'USCGR'
  | 'USMC'
  | 'USMCR'
  | 'USN'
  | 'USNR'
  | 'USA, Ret.'
  | 'USAF, Ret.'
  | 'USAFR, Ret.'
  | 'USAR, Ret.'
  | 'USCG, Ret.'
  | 'USCGR, Ret.'
  | 'USMC, Ret.'
  | 'USMCR, Ret.'
  | 'USN, Ret.'
  | 'USNR, Ret.';
/**
 * Date of birth upon matriculation to Stanford, in ISO 8601 standard date/time format, e.g., 1994-11-05
 */
export type RelatedContactDateOfBirth = string;
/**
 * This is the outward-facing type (e.g., alumni, student, parent, staff, organization) of the constituent that can be displayed to other constituents.  This is a rollup of the underlying raw values in CARD (Salesforce).
 */
export type AffiliationType = 'Alum' | 'Current Student' | 'Faculty' | 'Parent of Undergraduate Student' | 'Staff';
/**
 * The name or description of the skill that the constituent has listed in their profile.
 */
export type Description = string;
/**
 * Object that includes data related to the (largely professional) skills of the constituent.  Contains the following data elements - Skill, Status (future version)
 */
export type SkillsAndSpecialties = SkillAndSpecialty[];
/**
 * The description of the student activity participated in by the constituent.
 */
export type StudentActivityDescription = string;
/**
 * The description of the student activity category - for example, fraternity, eating club, club sport, etc.
 */
export type Category =
  | 'Business School'
  | 'Club Sports'
  | 'Eating Clubs'
  | 'Fraternities'
  | 'Fundraising'
  | 'Haas Ctr'
  | 'Law School'
  | 'Miscellaneous'
  | 'Overseas Studies'
  | 'Performing Arts'
  | 'Sororities';
/**
 * The description of the student activity participated in by the constituent.
 */
export type UserUpdatesAccepted = boolean;
/**
 * The end date of the student activity.
 */
export type StopDate = string;
/**
 * Array that includes one object for each constituent Student Residence, each including 6 data elements.
 */
export type StudentActivities = StudentActivity[];
/**
 * The description of the student residence participated in by the constituent.
 */
export type StudentResidenceDescription = string;
/**
 * Identifies how the constituent engaged in the activity, options includes participated, frosh dorm, residence staff.
 */
export type ParticipationType = 'Frosh Dorm' | 'Participated';
/**
 * Array that includes one object for each constituent Student Residence, each including 6 data elements.
 */
export type StudentResidences = StudentResidence[];
/**
 * A unique identifier for the record for the constituent.
 */
export type URLCommunicationMethodID = string;
/**
 * Constituent handlesType selection (The website or category associated with the URL.  For example Twitter. )
 */
export type UrlType =
  | 'Digg'
  | 'Facebook'
  | 'Flickr'
  | 'Google'
  | 'Instagram'
  | 'LinkedIn'
  | 'Organization URL'
  | 'Other'
  | 'Personal Blog'
  | 'Personal URL'
  | 'Twitter'
  | 'Yahoo!'
  | 'YouTube';
/**
 * Unique identifier on a network, often an alphanumeric string.
 */
export type Url1 = string;
/**
 * Array that includes one object for each constituent urls
 */
export type Urls = Url[];
/**
 * A unique identifier for the record for the constituent.
 */
export type ID4 = string;
/**
 * The description of the student activity participated in by the constituent.
 */
export type VarsitySportDescription = string;
/**
 * Array that includes one object for each constituent Varsity Sport, each including 5 data elements.
 */
export type VarsitySports = VarsitySport[];

export interface MegaProfileAPI {
  GetAddressesSuccessResponseDTO?: GetAddressesSuccessResponseDTO;
  GetAddressesNotFoundErrorResponseDTO?: GetAddressesNotFoundErrorResponseDTO;
  GetAddressesMethodNotAllowedErrorResponseDTO?: GetAddressesMethodNotAllowedErrorResponseDTO;
  PostAddressesRequestBodyDTO?: PostAddressesRequestBodyDTO;
  PostAddressesCreatedResponseDTO?: PostAddressesCreatedResponseDTO;
  PostAddressesBadRequestErrorResponseDTO?: PostAddressesBadRequestErrorResponseDTO;
  PostAddressesNotFoundErrorResponseDTO?: PostAddressesNotFoundErrorResponseDTO;
  PostAddressesMethodNotAllowedErrorResponseDTO?: PostAddressesMethodNotAllowedErrorResponseDTO;
  PutAddressesRequestBodyDTO?: PutAddressesRequestBodyDTO;
  PutAddressesSuccessResponseDTO?: PutAddressesSuccessResponseDTO;
  PutAddressesBadRequestErrorResponseDTO?: PutAddressesBadRequestErrorResponseDTO;
  PutAddressesNotFoundErrorResponseDTO?: PutAddressesNotFoundErrorResponseDTO;
  PutAddressesMethodNotAllowedErrorResponseDTO?: PutAddressesMethodNotAllowedErrorResponseDTO;
  DeleteAddressesSuccessResponseDTO?: DeleteAddressesSuccessResponseDTO;
  DeleteAddressesNotFoundErrorResponseDTO?: DeleteAddressesNotFoundErrorResponseDTO;
  DeleteAddressesMethodNotAllowedErrorResponseDTO?: DeleteAddressesMethodNotAllowedErrorResponseDTO;
  GetAffiliationsSuccessResponseDTO?: GetAffiliationsSuccessResponseDTO;
  GetAffiliationsNotFoundErrorResponseDTO?: GetAffiliationsNotFoundErrorResponseDTO;
  GetAffiliationsMethodNotAllowedErrorResponseDTO?: GetAffiliationsMethodNotAllowedErrorResponseDTO;
  GetBiosSuccessResponseDTO?: GetBiosSuccessResponseDTO;
  GetBiosNotFoundErrorResponseDTO?: GetBiosNotFoundErrorResponseDTO;
  GetBiosMethodNotAllowedErrorResponseDTO?: GetBiosMethodNotAllowedErrorResponseDTO;
  PutBiosRequestBodyDTO?: PutBiosRequestBodyDTO;
  PutBiosSuccessResponseDTO?: PutBiosSuccessResponseDTO;
  PutBiosBadRequestErrorResponseDTO?: PutBiosBadRequestErrorResponseDTO;
  PutBiosNotFoundErrorResponseDTO?: PutBiosNotFoundErrorResponseDTO;
  PutBiosMethodNotAllowedErrorResponseDTO?: PutBiosMethodNotAllowedErrorResponseDTO;
  GetCareersupportSuccessResponseDTO?: GetCareersupportSuccessResponseDTO;
  GetCareersupportNotFoundErrorResponseDTO?: GetCareersupportNotFoundErrorResponseDTO;
  GetCareersupportMethodNotAllowedErrorResponseDTO?: GetCareersupportMethodNotAllowedErrorResponseDTO;
  PutCareersupportRequestBodyDTO?: PutCareersupportRequestBodyDTO;
  PutCareersupportSuccessResponseDTO?: PutCareersupportSuccessResponseDTO;
  PutCareersupportBadRequestErrorResponseDTO?: PutCareersupportBadRequestErrorResponseDTO;
  PutCareersupportNotFoundErrorResponseDTO?: PutCareersupportNotFoundErrorResponseDTO;
  PutCareersupportMethodNotAllowedErrorResponseDTO?: PutCareersupportMethodNotAllowedErrorResponseDTO;
  GetCommunityaffinitiesSuccessResponseDTO?: GetCommunityaffinitiesSuccessResponseDTO;
  GetCommunityaffinitiesNotFoundErrorResponseDTO?: GetCommunityaffinitiesNotFoundErrorResponseDTO;
  GetCommunityaffinitiesMethodNotAllowedErrorResponseDTO?: GetCommunityaffinitiesMethodNotAllowedErrorResponseDTO;
  PostCommunityaffinitiesRequestBodyDTO?: PostCommunityaffinitiesRequestBodyDTO;
  PostCommunityaffinitiesCreatedResponseDTO?: PostCommunityaffinitiesCreatedResponseDTO;
  PostCommunityaffinitiesBadRequestErrorResponseDTO?: PostCommunityaffinitiesBadRequestErrorResponseDTO;
  PostCommunityaffinitiesNotFoundErrorResponseDTO?: PostCommunityaffinitiesNotFoundErrorResponseDTO;
  PostCommunityaffinitiesMethodNotAllowedErrorResponseDTO?: PostCommunityaffinitiesMethodNotAllowedErrorResponseDTO;
  PutCommunityaffinitiesRequestBodyDTO?: PutCommunityaffinitiesRequestBodyDTO;
  PutCommunityaffinitiesSuccessResponseDTO?: PutCommunityaffinitiesSuccessResponseDTO;
  PutCommunityaffinitiesBadRequestErrorResponseDTO?: PutCommunityaffinitiesBadRequestErrorResponseDTO;
  PutCommunityaffinitiesNotFoundErrorResponseDTO?: PutCommunityaffinitiesNotFoundErrorResponseDTO;
  PutCommunityaffinitiesMethodNotAllowedErrorResponseDTO?: PutCommunityaffinitiesMethodNotAllowedErrorResponseDTO;
  DeleteCommunityaffinitiesSuccessResponseDTO?: DeleteCommunityaffinitiesSuccessResponseDTO;
  DeleteCommunityaffinitiesNotFoundErrorResponseDTO?: DeleteCommunityaffinitiesNotFoundErrorResponseDTO;
  DeleteCommunityaffinitiesMethodNotAllowedErrorResponseDTO?: DeleteCommunityaffinitiesMethodNotAllowedErrorResponseDTO;
  GetConstituentsSuccessResponseDTO?: GetConstituentsSuccessResponseDTO;
  GetConstituentsNotFoundErrorResponseDTO?: GetConstituentsNotFoundErrorResponseDTO;
  GetConstituentsMethodNotAllowedErrorResponseDTO?: GetConstituentsMethodNotAllowedErrorResponseDTO;
  PostConstituentsRequestBodyDTO?: PostConstituentsRequestBodyDTO;
  PostConstituentsCreatedResponseDTO?: PostConstituentsCreatedResponseDTO;
  PostConstituentsBadRequestErrorResponseDTO?: PostConstituentsBadRequestErrorResponseDTO;
  PostConstituentsNotFoundErrorResponseDTO?: PostConstituentsNotFoundErrorResponseDTO;
  PostConstituentsMethodNotAllowedErrorResponseDTO?: PostConstituentsMethodNotAllowedErrorResponseDTO;
  GetContactSuccessResponseDTO?: GetContactSuccessResponseDTO;
  GetContactNotFoundErrorResponseDTO?: GetContactNotFoundErrorResponseDTO;
  GetContactMethodNotAllowedErrorResponseDTO?: GetContactMethodNotAllowedErrorResponseDTO;
  PutContactRequestBodyDTO?: PutContactRequestBodyDTO;
  PutContactSuccessResponseDTO?: PutContactSuccessResponseDTO;
  PutContactBadRequestErrorResponseDTO?: PutContactBadRequestErrorResponseDTO;
  PutContactNotFoundErrorResponseDTO?: PutContactNotFoundErrorResponseDTO;
  PutContactMethodNotAllowedErrorResponseDTO?: PutContactMethodNotAllowedErrorResponseDTO;
  GetDegreesSuccessResponseDTO?: GetDegreesSuccessResponseDTO;
  GetDegreesNotFoundErrorResponseDTO?: GetDegreesNotFoundErrorResponseDTO;
  GetDegreesMethodNotAllowedErrorResponseDTO?: GetDegreesMethodNotAllowedErrorResponseDTO;
  PostDegreesRequestBodyDTO?: PostDegreesRequestBodyDTO;
  PostDegreesCreatedResponseDTO?: PostDegreesCreatedResponseDTO;
  PostDegreesBadRequestErrorResponseDTO?: PostDegreesBadRequestErrorResponseDTO;
  PostDegreesNotFoundErrorResponseDTO?: PostDegreesNotFoundErrorResponseDTO;
  PostDegreesMethodNotAllowedErrorResponseDTO?: PostDegreesMethodNotAllowedErrorResponseDTO;
  PatchDegreesRequestBodyDTO?: PatchDegreesRequestBodyDTO;
  PatchDegreesSuccessResponseDTO?: PatchDegreesSuccessResponseDTO;
  DeleteDegreesSuccessResponseDTO?: DeleteDegreesSuccessResponseDTO;
  DeleteDegreesNotFoundErrorResponseDTO?: DeleteDegreesNotFoundErrorResponseDTO;
  DeleteDegreesMethodNotAllowedErrorResponseDTO?: DeleteDegreesMethodNotAllowedErrorResponseDTO;
  GetEmailsSuccessResponseDTO?: GetEmailsSuccessResponseDTO;
  GetEmailsNotFoundErrorResponseDTO?: GetEmailsNotFoundErrorResponseDTO;
  GetEmailsMethodNotAllowedErrorResponseDTO?: GetEmailsMethodNotAllowedErrorResponseDTO;
  PostEmailsRequestBodyDTO?: PostEmailsRequestBodyDTO;
  PostEmailsCreatedResponseDTO?: ID1;
  PostEmailsBadRequestErrorResponseDTO?: PostEmailsBadRequestErrorResponseDTO;
  PostEmailsNotFoundErrorResponseDTO?: PostEmailsNotFoundErrorResponseDTO;
  PostEmailsMethodNotAllowedErrorResponseDTO?: PostEmailsMethodNotAllowedErrorResponseDTO;
  DeleteEmailsSuccessResponseDTO?: DeleteEmailsSuccessResponseDTO;
  DeleteEmailsNotFoundErrorResponseDTO?: DeleteEmailsNotFoundErrorResponseDTO;
  DeleteEmailsMethodNotAllowedErrorResponseDTO?: DeleteEmailsMethodNotAllowedErrorResponseDTO;
  GetInterestsSuccessResponseDTO?: GetInterestsSuccessResponseDTO;
  GetInterestsNotFoundErrorResponseDTO?: GetInterestsNotFoundErrorResponseDTO;
  GetInterestsMethodNotAllowedErrorResponseDTO?: GetInterestsMethodNotAllowedErrorResponseDTO;
  PostInterestsRequestBodyDTO?: PostInterestsRequestBodyDTO;
  PostInterestsCreatedResponseDTO?: ID2;
  PostInterestsBadRequestErrorResponseDTO?: PostInterestsBadRequestErrorResponseDTO;
  PostInterestsNotFoundErrorResponseDTO?: PostInterestsNotFoundErrorResponseDTO;
  PostInterestsMethodNotAllowedErrorResponseDTO?: PostInterestsMethodNotAllowedErrorResponseDTO;
  PutInterestsRequestBodyDTO?: PutInterestsRequestBodyDTO;
  PutInterestsSuccessResponseDTO?: PutInterestsSuccessResponseDTO;
  PutInterestsBadRequestErrorResponseDTO?: PutInterestsBadRequestErrorResponseDTO;
  PutInterestsNotFoundErrorResponseDTO?: PutInterestsNotFoundErrorResponseDTO;
  PutInterestsMethodNotAllowedErrorResponseDTO?: PutInterestsMethodNotAllowedErrorResponseDTO;
  DeleteInterestsSuccessResponseDTO?: DeleteInterestsSuccessResponseDTO;
  DeleteInterestsNotFoundErrorResponseDTO?: DeleteInterestsNotFoundErrorResponseDTO;
  DeleteInterestsMethodNotAllowedErrorResponseDTO?: DeleteInterestsMethodNotAllowedErrorResponseDTO;
  GetLanguagesSuccessResponseDTO?: GetLanguagesSuccessResponseDTO;
  GetLanguagesNotFoundErrorResponseDTO?: GetLanguagesNotFoundErrorResponseDTO;
  GetLanguagesMethodNotAllowedErrorResponseDTO?: GetLanguagesMethodNotAllowedErrorResponseDTO;
  PostLanguagesRequestBodyDTO?: PostLanguagesRequestBodyDTO;
  PostLanguagesCreatedResponseDTO?: ID3;
  PostLanguagesBadRequestErrorResponseDTO?: PostLanguagesBadRequestErrorResponseDTO;
  PostLanguagesNotFoundErrorResponseDTO?: PostLanguagesNotFoundErrorResponseDTO;
  PostLanguagesMethodNotAllowedErrorResponseDTO?: PostLanguagesMethodNotAllowedErrorResponseDTO;
  PutLanguagesRequestBodyDTO?: PutLanguagesRequestBodyDTO;
  PutLanguagesSuccessResponseDTO?: PutLanguagesSuccessResponseDTO;
  PutLanguagesBadRequestErrorResponseDTO?: PutLanguagesBadRequestErrorResponseDTO;
  PutLanguagesNotFoundErrorResponseDTO?: PutLanguagesNotFoundErrorResponseDTO;
  PutLanguagesMethodNotAllowedErrorResponseDTO?: PutLanguagesMethodNotAllowedErrorResponseDTO;
  DeleteLanguagesSuccessResponseDTO?: DeleteLanguagesSuccessResponseDTO;
  DeleteLanguagesNotFoundErrorResponseDTO?: DeleteLanguagesNotFoundErrorResponseDTO;
  DeleteLanguagesMethodNotAllowedErrorResponseDTO?: DeleteLanguagesMethodNotAllowedErrorResponseDTO;
  GetPhonenumbersSuccessResponseDTO?: GetPhonenumbersSuccessResponseDTO;
  GetPhonenumbersNotFoundErrorResponseDTO?: GetPhonenumbersNotFoundErrorResponseDTO;
  GetPhonenumbersMethodNotAllowedErrorResponseDTO?: GetPhonenumbersMethodNotAllowedErrorResponseDTO;
  PostPhonenumbersRequestBodyDTO?: PostPhonenumbersRequestBodyDTO;
  PostPhonenumbersCreatedResponseDTO?: PostPhonenumbersCreatedResponseDTO;
  PostPhonenumbersBadRequestErrorResponseDTO?: PostPhonenumbersBadRequestErrorResponseDTO;
  PostPhonenumbersNotFoundErrorResponseDTO?: PostPhonenumbersNotFoundErrorResponseDTO;
  PostPhonenumbersMethodNotAllowedErrorResponseDTO?: PostPhonenumbersMethodNotAllowedErrorResponseDTO;
  DeletePhonenumbersSuccessResponseDTO?: DeletePhonenumbersSuccessResponseDTO;
  DeletePhonenumbersNotFoundErrorResponseDTO?: DeletePhonenumbersNotFoundErrorResponseDTO;
  DeletePhonenumbersMethodNotAllowedErrorResponseDTO?: DeletePhonenumbersMethodNotAllowedErrorResponseDTO;
  GetPositionsSuccessResponseDTO?: GetPositionsSuccessResponseDTO;
  GetPositionsNotFoundErrorResponseDTO?: GetPositionsNotFoundErrorResponseDTO;
  GetPositionsMethodNotAllowedErrorResponseDTO?: GetPositionsMethodNotAllowedErrorResponseDTO;
  PostPositionsRequestBodyDTO?: PostPositionsRequestBodyDTO;
  PostPositionsCreatedResponseDTO?: PostPositionsCreatedResponseDTO;
  PostPositionsBadRequestErrorResponseDTO?: PostPositionsBadRequestErrorResponseDTO;
  PostPositionsNotFoundErrorResponseDTO?: PostPositionsNotFoundErrorResponseDTO;
  PostPositionsMethodNotAllowedErrorResponseDTO?: PostPositionsMethodNotAllowedErrorResponseDTO;
  PutPositionsRequestBodyDTO?: PutPositionsRequestBodyDTO;
  PutPositionsSuccessResponseDTO?: PutPositionsSuccessResponseDTO;
  PutPositionsBadRequestErrorResponseDTO?: PutPositionsBadRequestErrorResponseDTO;
  PutPositionsNotFoundErrorResponseDTO?: PutPositionsNotFoundErrorResponseDTO;
  PutPositionsMethodNotAllowedErrorResponseDTO?: PutPositionsMethodNotAllowedErrorResponseDTO;
  DeletePositionsSuccessResponseDTO?: DeletePositionsSuccessResponseDTO;
  DeletePositionsNotFoundErrorResponseDTO?: DeletePositionsNotFoundErrorResponseDTO;
  DeletePositionsMethodNotAllowedErrorResponseDTO?: DeletePositionsMethodNotAllowedErrorResponseDTO;
  GetPrivacySuccessResponseDTO?: GetPrivacySuccessResponseDTO;
  GetPrivacyNotFoundErrorResponseDTO?: GetPrivacyNotFoundErrorResponseDTO;
  GetPrivacyMethodNotAllowedErrorResponseDTO?: GetPrivacyMethodNotAllowedErrorResponseDTO;
  PutPrivacyRequestBodyDTO?: PutPrivacyRequestBodyDTO;
  PutPrivacySuccessResponseDTO?: PutPrivacySuccessResponseDTO;
  PutPrivacyBadRequestErrorResponseDTO?: PutPrivacyBadRequestErrorResponseDTO;
  PutPrivacyNotFoundErrorResponseDTO?: PutPrivacyNotFoundErrorResponseDTO;
  PutPrivacyMethodNotAllowedErrorResponseDTO?: PutPrivacyMethodNotAllowedErrorResponseDTO;
  GetRelationshipsSuccessResponseDTO?: GetRelationshipsSuccessResponseDTO;
  GetRelationshipsNotFoundErrorResponseDTO?: GetRelationshipsNotFoundErrorResponseDTO;
  GetRelationshipsMethodNotAllowedErrorResponseDTO?: GetRelationshipsMethodNotAllowedErrorResponseDTO;
  PostRelationshipsRequestBodyDTO?: PostRelationshipsRequestBodyDTO;
  PostRelationshipsCreatedResponseDTO?: PostRelationshipsCreatedResponseDTO;
  PostRelationshipsBadRequestErrorResponseDTO?: PostRelationshipsBadRequestErrorResponseDTO;
  PostRelationshipsNotFoundErrorResponseDTO?: PostRelationshipsNotFoundErrorResponseDTO;
  PostRelationshipsMethodNotAllowedErrorResponseDTO?: PostRelationshipsMethodNotAllowedErrorResponseDTO;
  GetSkillsandspecialitiesSuccessResponseDTO?: GetSkillsandspecialitiesSuccessResponseDTO;
  GetSkillsandspecialitiesNotFoundErrorResponseDTO?: GetSkillsandspecialitiesNotFoundErrorResponseDTO;
  GetSkillsandspecialitiesMethodNotAllowedErrorResponseDTO?: GetSkillsandspecialitiesMethodNotAllowedErrorResponseDTO;
  PostSkillsandspecialitiesRequestBodyDTO?: PostSkillsandspecialitiesRequestBodyDTO;
  PostSkillsandspecialitiesCreatedResponseDTO?: PostSkillsandspecialitiesCreatedResponseDTO;
  PostSkillsandspecialitiesBadRequestErrorResponseDTO?: PostSkillsandspecialitiesBadRequestErrorResponseDTO;
  PostSkillsandspecialitiesNotFoundErrorResponseDTO?: PostSkillsandspecialitiesNotFoundErrorResponseDTO;
  PostSkillsandspecialitiesMethodNotAllowedErrorResponseDTO?: PostSkillsandspecialitiesMethodNotAllowedErrorResponseDTO;
  PutSkillsandspecialitiesRequestBodyDTO?: PutSkillsandspecialitiesRequestBodyDTO;
  PutSkillsandspecialitiesSuccessResponseDTO?: PutSkillsandspecialitiesSuccessResponseDTO;
  PutSkillsandspecialitiesBadRequestErrorResponseDTO?: PutSkillsandspecialitiesBadRequestErrorResponseDTO;
  PutSkillsandspecialitiesNotFoundErrorResponseDTO?: PutSkillsandspecialitiesNotFoundErrorResponseDTO;
  PutSkillsandspecialitiesMethodNotAllowedErrorResponseDTO?: PutSkillsandspecialitiesMethodNotAllowedErrorResponseDTO;
  DeleteSkillsandspecialitiesSuccessResponseDTO?: DeleteSkillsandspecialitiesSuccessResponseDTO;
  DeleteSkillsandspecialitiesNotFoundErrorResponseDTO?: DeleteSkillsandspecialitiesNotFoundErrorResponseDTO;
  DeleteSkillsandspecialitiesMethodNotAllowedErrorResponseDTO?: DeleteSkillsandspecialitiesMethodNotAllowedErrorResponseDTO;
  GetStudentactivitiesSuccessResponseDTO?: GetStudentactivitiesSuccessResponseDTO;
  GetStudentactivitiesNotFoundErrorResponseDTO?: GetStudentactivitiesNotFoundErrorResponseDTO;
  GetStudentactivitiesMethodNotAllowedErrorResponseDTO?: GetStudentactivitiesMethodNotAllowedErrorResponseDTO;
  PostStudentactivitiesRequestBodyDTO?: PostStudentactivitiesRequestBodyDTO;
  PostStudentactivitiesCreatedResponseDTO?: PostStudentactivitiesCreatedResponseDTO;
  PostStudentactivitiesBadRequestErrorResponseDTO?: PostStudentactivitiesBadRequestErrorResponseDTO;
  PostStudentactivitiesNotFoundErrorResponseDTO?: PostStudentactivitiesNotFoundErrorResponseDTO;
  PostStudentactivitiesMethodNotAllowedErrorResponseDTO?: PostStudentactivitiesMethodNotAllowedErrorResponseDTO;
  PutStudentactivitiesRequestBodyDTO?: PutStudentactivitiesRequestBodyDTO;
  PutStudentactivitiesSuccessResponseDTO?: PutStudentactivitiesSuccessResponseDTO;
  PutStudentactivitiesBadRequestErrorResponseDTO?: PutStudentactivitiesBadRequestErrorResponseDTO;
  PutStudentactivitiesNotFoundErrorResponseDTO?: PutStudentactivitiesNotFoundErrorResponseDTO;
  PutStudentactivitiesMethodNotAllowedErrorResponseDTO?: PutStudentactivitiesMethodNotAllowedErrorResponseDTO;
  DeleteStudentactivitiesSuccessResponseDTO?: DeleteStudentactivitiesSuccessResponseDTO;
  DeleteStudentactivitiesNotFoundErrorResponseDTO?: DeleteStudentactivitiesNotFoundErrorResponseDTO;
  DeleteStudentactivitiesMethodNotAllowedErrorResponseDTO?: DeleteStudentactivitiesMethodNotAllowedErrorResponseDTO;
  GetStudentresidencesSuccessResponseDTO?: GetStudentresidencesSuccessResponseDTO;
  GetStudentresidencesNotFoundErrorResponseDTO?: GetStudentresidencesNotFoundErrorResponseDTO;
  GetStudentresidencesMethodNotAllowedErrorResponseDTO?: GetStudentresidencesMethodNotAllowedErrorResponseDTO;
  PostStudentresidencesRequestBodyDTO?: PostStudentresidencesRequestBodyDTO;
  PostStudentresidencesCreatedResponseDTO?: PostStudentresidencesCreatedResponseDTO;
  PostStudentresidencesBadRequestErrorResponseDTO?: PostStudentresidencesBadRequestErrorResponseDTO;
  PostStudentresidencesNotFoundErrorResponseDTO?: PostStudentresidencesNotFoundErrorResponseDTO;
  PostStudentresidencesMethodNotAllowedErrorResponseDTO?: PostStudentresidencesMethodNotAllowedErrorResponseDTO;
  PutStudentresidencesRequestBodyDTO?: PutStudentresidencesRequestBodyDTO;
  PutStudentresidencesSuccessResponseDTO?: PutStudentresidencesSuccessResponseDTO;
  PutStudentresidencesBadRequestErrorResponseDTO?: PutStudentresidencesBadRequestErrorResponseDTO;
  PutStudentresidencesNotFoundErrorResponseDTO?: PutStudentresidencesNotFoundErrorResponseDTO;
  PutStudentresidencesMethodNotAllowedErrorResponseDTO?: PutStudentresidencesMethodNotAllowedErrorResponseDTO;
  DeleteStudentresidencesSuccessResponseDTO?: DeleteStudentresidencesSuccessResponseDTO;
  DeleteStudentresidencesNotFoundErrorResponseDTO?: DeleteStudentresidencesNotFoundErrorResponseDTO;
  DeleteStudentresidencesMethodNotAllowedErrorResponseDTO?: DeleteStudentresidencesMethodNotAllowedErrorResponseDTO;
  GetUrlsSuccessResponseDTO?: GetUrlsSuccessResponseDTO;
  GetUrlsNotFoundErrorResponseDTO?: GetUrlsNotFoundErrorResponseDTO;
  GetUrlsMethodNotAllowedErrorResponseDTO?: GetUrlsMethodNotAllowedErrorResponseDTO;
  PostUrlsRequestBodyDTO?: PostUrlsRequestBodyDTO;
  PostUrlsCreatedResponseDTO?: ID4;
  PostUrlsBadRequestErrorResponseDTO?: PostUrlsBadRequestErrorResponseDTO;
  PostUrlsNotFoundErrorResponseDTO?: PostUrlsNotFoundErrorResponseDTO;
  PostUrlsMethodNotAllowedErrorResponseDTO?: PostUrlsMethodNotAllowedErrorResponseDTO;
  PutUrlsRequestBodyDTO?: PutUrlsRequestBodyDTO;
  PutUrlsSuccessResponseDTO?: PutUrlsSuccessResponseDTO;
  PutUrlsBadRequestErrorResponseDTO?: PutUrlsBadRequestErrorResponseDTO;
  PutUrlsNotFoundErrorResponseDTO?: PutUrlsNotFoundErrorResponseDTO;
  PutUrlsMethodNotAllowedErrorResponseDTO?: PutUrlsMethodNotAllowedErrorResponseDTO;
  DeleteUrlsSuccessResponseDTO?: DeleteUrlsSuccessResponseDTO;
  DeleteUrlsNotFoundErrorResponseDTO?: DeleteUrlsNotFoundErrorResponseDTO;
  DeleteUrlsMethodNotAllowedErrorResponseDTO?: DeleteUrlsMethodNotAllowedErrorResponseDTO;
  GetVarsitysportsSuccessResponseDTO?: GetVarsitysportsSuccessResponseDTO;
  GetVarsitysportsNotFoundErrorResponseDTO?: GetVarsitysportsNotFoundErrorResponseDTO;
  GetVarsitysportsMethodNotAllowedErrorResponseDTO?: GetVarsitysportsMethodNotAllowedErrorResponseDTO;
}
export interface GetAddressesSuccessResponseDTO {
  addresses?: Addresses;
}
/**
 * Object that Includes the following data elements - Addresses details of constituent
 */
export interface Address {
  id: Id_1;
  addressVerified: AddressVerified;
  addressAccepted: AddressAccepted;
  type: AddressType;
  startDate?: StartDate;
  ADIVGeoCode?: ADIVGeoCode;
  addressParsed: AddressParsed;
}
/**
 * Object that Includes the following data elements - Parsed Addresses details of constituent
 */
export interface AddressParsed {
  companyName?: CompanyName;
  country: AddressCountry;
  careOfLine?: CareOfLine;
  streetAddress1: StreetAddress1;
  streetAddress2?: StreetAddress2;
  streetAddress3?: StreetAddress3;
  city?: City;
  stateProvince?: StateProvince;
  zipPostalCode?: ZipPostalCode;
}
export interface GetAddressesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetAddressesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostAddressesRequestBodyDTO {
  address: Address1;
}
/**
 * Object that Includes the following data elements - Addresses details of constituent
 */
export interface Address1 {
  type: AddressType;
  startDate: StartDate;
  country: ISOCountryCodeAlpha3;
  stateProvince?: StateProvince;
  streetAddress1: StreetAddress1;
  streetAddress2?: StreetAddress2;
  streetAddress3?: StreetAddress3;
  city: City;
  zipPostalCode?: ZipPostalCode;
  careOfLine?: CareOfLine;
  companyName?: CompanyName;
  addressVerified: AddressVerified;
  addressAccepted: AddressAccepted;
}
export interface PostAddressesCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostAddressesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostAddressesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostAddressesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutAddressesRequestBodyDTO {
  address: Address2;
}
/**
 * Object that Includes the following data elements - Addresses details of constituent
 */
export interface Address2 {
  companyName?: CompanyName;
  streetAddress2?: StreetAddress2;
  streetAddress3?: StreetAddress3;
  careOfLine?: CareOfLine;
}
export interface PutAddressesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutAddressesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutAddressesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutAddressesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteAddressesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteAddressesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteAddressesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetAffiliationsSuccessResponseDTO {
  constituentTypes: ConstituentTypes;
  affiliations?: Affiliations;
}
export interface ConstituentType {
  displayConstituentType: DisplayConstituentType;
  salesforceConstituentType: SalesforceConstituentType;
  primary?: Primary;
  degreeStringParent?: DegreeStringParent;
}
export interface GetAffiliationsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetAffiliationsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetBiosSuccessResponseDTO {
  bios?: Bios;
}
export interface Bios {
  about?: About;
  aboutSource?: DataSource;
  headline?: Headline;
  headlineSource?: DataSource;
  linkedInURL?: LinkedInURL;
}
export interface GetBiosNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetBiosMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutBiosRequestBodyDTO {
  bios: Bios1;
}
export interface Bios1 {
  about?: About;
  aboutSource: DataSource;
  headline?: Headline;
  headlineSource: DataSource;
  linkedInURL?: LinkedInURL;
}
export interface PutBiosSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutBiosBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutBiosNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutBiosMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetCareersupportSuccessResponseDTO {
  careerSupportOffered?: CareerSupportOffered;
  careerSupportInterests?: CareerSupportInterests;
}
export interface GetCareersupportNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetCareersupportMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutCareersupportRequestBodyDTO {
  careerSupportOffered: CareerSupportOffered;
  careerSupportInterests?: CareerSupportInterests2;
}
export interface PutCareersupportSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutCareersupportBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutCareersupportNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutCareersupportMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetCommunityaffinitiesSuccessResponseDTO {
  communityAffinities?: CommunityAffinities;
}
/**
 * Constituent's identity or allyship first-level category, in the form of a short text heading, designed to accompany the associated long text description.
 */
export interface CommunityAffinities1 {
  id: Id_1;
  communityAffinity: CommunityAffinity_2;
}
export interface GetCommunityaffinitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetCommunityaffinitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostCommunityaffinitiesRequestBodyDTO {
  communityAffinity: CommunityAffinity;
}
export interface PostCommunityaffinitiesCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostCommunityaffinitiesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostCommunityaffinitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostCommunityaffinitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutCommunityaffinitiesRequestBodyDTO {
  communityAffinity: CommunityAffinity;
}
export interface PutCommunityaffinitiesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutCommunityaffinitiesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutCommunityaffinitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutCommunityaffinitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteCommunityaffinitiesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteCommunityaffinitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteCommunityaffinitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetConstituentsSuccessResponseDTO {
  contact: Contact;
}
export interface Contact {
  encodedSUID?: EncodedSUID;
  username?: StanfordPassUsername;
  emailExists?: EmailExists;
}
export interface GetConstituentsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetConstituentsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostConstituentsRequestBodyDTO {
  contact: Contact1;
  emails: Emails;
}
/**
 * Object that includes the following data elements - Full Name Parsed
 */
export interface Contact1 {
  stanfordAffiliate: StanfordAffiliate;
  suffixProfessional?: SuffixProfessional;
  middleName?: MiddleName;
  profilePhotoURL?: ProfilePhotoURL;
  lastName: LastName;
  prefix: Prefix;
  pronouns?: Pronouns;
  firstName: FirstName;
  preferredEmail?: EmailType;
  suffixPersonal?: SuffixPersonal;
}
/**
 * Email for constituent
 */
export interface Email {
  type: EmailType;
  emailAddress: EmailAddress;
}
export interface PostConstituentsCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostConstituentsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostConstituentsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostConstituentsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetContactSuccessResponseDTO {
  contact: Contact2;
}
/**
 * Object that includes the following data elements - Display Name, My Friends Call Me, Full Name Parsed
 */
export interface Contact2 {
  birthDate?: BirthDate;
  preferredPhoneType?: PhoneNumberType;
  preferredAddress?: AddressType;
  preferredEmail?: EmailType;
  raceEthnicityFromRegistrar?: RaceEthnicityFromRegistrar[];
  selfReportedEthnicity?: SelfReportedEthnicity[];
  selfReportedEthnicityCustom?: SelfReportedEthnicityCustom;
  maritalStatus: MaritalStatus;
  profilePhotoURL?: ProfilePhotoURL;
  name: Name;
  degreeStringShort?: DegreeStringShort;
  unverifiedStanfordDegrees?: UnverifiedStanfordDegrees;
  metadata: Metadata;
}
/**
 * Object that includes the following data elements - Display Name, My Friends Call Me, Full Name Parsed, Registration Name String, Registration Name Parsed
 */
export interface Name {
  digitalName: DigitalName;
  pronouns?: Pronouns;
  myFriendsCallMe?: MyFriendsCallMe;
  envelopeName: EnvelopeName;
  username: StanfordPassUsername;
  registrationNameString?: RegistrationNameString;
  fullNameParsed: FullNameParsed;
}
/**
 * Object that includes the following data elements - Prefix, First Name, Middle Name, Last Name, Suffix Personal, Suffix Professional
 */
export interface FullNameParsed {
  prefix?: Prefix;
  firstName?: FirstName;
  middleName?: MiddleName;
  lastName?: LastName;
  suffixPersonal?: SuffixPersonal;
  suffixProfessional?: SuffixProfessional;
}
/**
 * Critical constituent metadata for a given encoded id - Status, Condolences, Obituary Url, Deceased Date, Deceased Notification Date, Legal Entity
 */
export interface Metadata {
  constituentStatus: ConstituentStatus;
  deceasedDate?: DeceasedDate;
  legalEntity: LegalEntity;
}
export interface GetContactNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetContactMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutContactRequestBodyDTO {
  contact: Contact3;
}
/**
 * Object that includes the following data elements - Display Name, My Friends Call Me, Full Name Parsed
 */
export interface Contact3 {
  digitalName: DigitalName;
  myFriendsCallMe?: MyFriendsCallMe;
  username: StanfordPassUsername;
  envelopeName?: EnvelopeName1;
  birthDate?: BirthDate;
  pronouns?: Pronouns;
  preferredPhoneType?: PhoneNumberType;
  preferredAddress?: AddressType;
  preferredEmail?: EmailType;
  selfReportedEthnicity?: SelfReportedEthnicity[];
  selfReportedEthnicityCustom?: SelfReportedEthnicityCustom;
  unverifiedStanfordDegrees?: UnverifiedStanfordDegrees;
  unverifiedSocialClassYear?: UnverifiedSocialClassYear;
  profilePhotoURL?: ProfilePhotoURL;
  fullNameParsed: FullNameParsed1;
}
/**
 * Object that includes the following data elements - Prefix, First Name, Middle Name, Last Name, Suffix Personal, Suffix Professional
 */
export interface FullNameParsed1 {
  prefix: Prefix;
  firstName: FirstName;
  middleName?: MiddleName;
  lastName: LastName;
  suffixPersonal?: SuffixPersonal;
  suffixProfessional?: SuffixProfessional;
}
export interface PutContactSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutContactBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutContactNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutContactMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetDegreesSuccessResponseDTO {
  degrees?: Degrees;
}
export interface Degree {
  id: Id_1;
  institutionCode: InstitutionCode;
  institutionName: InstitutionName;
  otherInstitutionName?: OtherInstitutionName;
  city?: City;
  country?: AddressCountry;
  degreeCertificate: DegreeCertificate;
  degreeLevel: DegreeLevel;
  degreeSocialClassYear?: DegreeSocialClassYear;
  school?: School;
  majorCode?: MajorCode;
  major?: Major;
  otherMajor?: OtherMajor;
  degreeAdvisorEncodedID?: DegreeAdvisorEncodedID;
  degreeAdvisorName?: DegreeAdvisorName;
  nonGrad: NonGrad;
  numberOfQuarters?: NumberOfQuarters;
  concentration?: Concentration;
}
export interface GetDegreesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetDegreesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostDegreesRequestBodyDTO {
  degree: Degree1;
}
export interface Degree1 {
  institutionCode: InstitutionCode;
  otherInstitutionName?: OtherInstitutionName;
  degreeCertificate?: DegreeCertificate;
  degreeSocialClassYear: DegreeSocialClassYear;
  majorCode?: MajorCode;
  otherMajor?: OtherMajor;
}
export interface PostDegreesCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostDegreesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostDegreesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostDegreesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PatchDegreesRequestBodyDTO {
  degree: Degree1;
}
export interface PatchDegreesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteDegreesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteDegreesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteDegreesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetEmailsSuccessResponseDTO {
  emails?: Emails1;
}
/**
 * Email for constituent
 */
export interface Email1 {
  id: Id_1;
  emailAddress: EmailAddress;
  type: EmailType;
}
export interface GetEmailsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetEmailsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostEmailsRequestBodyDTO {
  email: Email2;
}
/**
 * Provide an active email associated with constituent
 */
export interface Email2 {
  emailAddress: EmailAddress;
  type: EmailType;
}
export interface PostEmailsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostEmailsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostEmailsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteEmailsSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteEmailsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteEmailsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetInterestsSuccessResponseDTO {
  interests?: Interests;
}
export interface Interest {
  id: Id_1;
  interest: InterestDescription;
}
export interface GetInterestsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetInterestsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostInterestsRequestBodyDTO {
  interest: Interest1;
}
export interface PostInterestsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostInterestsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostInterestsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutInterestsRequestBodyDTO {
  interest: Interest1;
}
export interface PutInterestsSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutInterestsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutInterestsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutInterestsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteInterestsSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteInterestsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteInterestsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetLanguagesSuccessResponseDTO {
  languages?: Languages;
}
export interface Language {
  id: Id_1;
  language: LanguageDescription;
  ISOLanguageCode: ISOLanguageCode;
  proficiencyLevel?: ProficiencyLevel;
  dataSource: DataSource;
}
export interface GetLanguagesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetLanguagesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostLanguagesRequestBodyDTO {
  language: Language1;
}
/**
 * Object that includes data related to the language expertise for the constituent.  Contains the following data elements - LanguageISOCode, Proficiency Level
 */
export interface Language1 {
  language: LanguageDescription;
  proficiencyLevel?: ProficiencyLevel;
  dataSource: DataSource;
}
export interface PostLanguagesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostLanguagesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostLanguagesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutLanguagesRequestBodyDTO {
  language: Language1;
}
export interface PutLanguagesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutLanguagesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutLanguagesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutLanguagesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteLanguagesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteLanguagesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteLanguagesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetPhonenumbersSuccessResponseDTO {
  phoneNumbers?: PhoneNumbers;
}
/**
 * Returns an array of phone number objects, including Communication Method ID, Phone Number Type, and Preferred Phone Type.
 */
export interface PhoneNumber {
  id: PhoneNumberCommunicationMethodID;
  phoneNumber: PhoneNumber1;
  ISOCountryCodeAlpha3?: ISOCountryCodeAlpha31;
  type: PhoneNumberType;
}
export interface GetPhonenumbersNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetPhonenumbersMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostPhonenumbersRequestBodyDTO {
  phoneNumber: PhoneNumber2;
}
/**
 * Returns an array of phone number objects, including Communication Method ID, Phone Number Type, and Preferred Phone Type.
 */
export interface PhoneNumber2 {
  phoneNumber: PhoneNumber3;
  ISOCountryCodeAlpha3: ISOCountryCodeAlpha3;
  type: PhoneNumberType;
}
export interface PostPhonenumbersCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostPhonenumbersBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostPhonenumbersNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostPhonenumbersMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeletePhonenumbersSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeletePhonenumbersNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeletePhonenumbersMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetPositionsSuccessResponseDTO {
  positions: Positions;
}
export interface Positions1 {
  id: Id_1;
  type: Type;
  organizationCode: OrganizationCode;
  organizationNotInCARD: OrganizationNotInCARD;
  primaryEmployment: PrimaryEmployment;
  jobTitle?: JobTitle;
  department: Department;
  positionDescription?: PositionDescription;
  linkedInOrganizationId?: LinkedInOrganizationId;
  dataSource: DataSource;
  selfEmployed: SelfEmployed;
  retiredEmployee: RetiredEmployee;
  startMonth: StartMonth;
  startYear: StartYear;
  endMonth: EndMonth;
  endYear: EndYear;
  fieldOfSpeciality1: FieldOfSpeciality;
  fieldOfSpeciality2: FieldOfSpeciality;
  fieldOfSpeciality3: FieldOfSpeciality;
}
export interface GetPositionsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetPositionsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostPositionsRequestBodyDTO {
  position?: Position;
}
export interface Position {
  type: Type;
  organizationCode?: OrganizationCode;
  organizationNotInCARD?: OrganizationNotInCARD;
  primaryEmployment: PrimaryEmployment;
  jobTitle: JobTitle;
  department?: Department;
  positionDescription?: PositionDescription;
  linkedInOrganizationId?: LinkedInOrganizationId;
  dataSource: DataSource1;
  selfEmployed: SelfEmployed;
  retiredEmployee: RetiredEmployee;
  startMonth?: StartMonth1;
  startYear?: StartYear1;
  endMonth?: EndMonth1;
  endYear?: EndYear1;
  fieldOfSpeciality1?: FieldOfSpeciality1;
  fieldOfSpeciality2?: FieldOfSpeciality2;
  fieldOfSpeciality3?: FieldOfSpeciality3;
}
export interface PostPositionsCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostPositionsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostPositionsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostPositionsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutPositionsRequestBodyDTO {
  position?: Position;
}
export interface PutPositionsSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutPositionsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutPositionsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutPositionsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeletePositionsSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeletePositionsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeletePositionsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetPrivacySuccessResponseDTO {
  privacy: PrivacyDetails;
}
/**
 * Object that includes Privacy Settings associated with constituent data.
 */
export interface PrivacyDetails {
  showBirthMonthDay: ShowBirthMonthDay;
  showSelfReportedEthnicity: ShowSelfReportedEthnicity;
  showHomePhone: ShowHomePhone;
  showMobilePhone: ShowMobilePhone;
  showOtherEmail: ShowOtherEmail;
  showRelationships: ShowRelationships;
  showBusinessEmail: ShowBusinessEmail;
  showBusinessAddress: ShowBusinessAddress;
  showBusinessPhone: ShowBusinessPhone;
  showCurrentPositions: ShowCurrentPositions;
  showPastPositions: ShowPastPositions;
  showBoardPositions: ShowBoardPositions;
  showNonStanfordDegrees: ShowNonStanfordDegrees;
  showRegistrationName: ShowRegistrationName;
  showStanfordDegrees: ShowStanfordDegrees;
  showStanfordDegreeSocialClassYears: ShowStanfordDegreeSocialClassYears;
  showVarsitySports: ShowVarsitySports;
  showStudentActivities: ShowStudentActivities;
  showStudentResidences: ShowStudentResidences;
  showPronouns: ShowPronouns;
  showAbout: ShowAbout;
  showHeadline: ShowHeadline;
  showSAAEmail: ShowSAAEmail;
  showGSBEmail: ShowGSBEmail;
  showHomeEmail: ShowHomeEmail;
  showLanguages: ShowLanguages;
  showURLs: ShowURLs;
  showCommunityAffinities: ShowCommunityAffinities;
  showSkillsAndSpecialties: ShowSkillsAndSpecialties;
  showInterests: ShowInterests;
  showHomeLocation: ShowHomeLocation;
  anonymity: Anonymity;
}
export interface GetPrivacyNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetPrivacyMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutPrivacyRequestBodyDTO {
  privacy: PrivacyDetails;
}
export interface PutPrivacySuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutPrivacyBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutPrivacyNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutPrivacyMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetRelationshipsSuccessResponseDTO {
  relationships?: Relationships;
}
export interface Relationship {
  id: Id_1;
  type: FamilyRelationshipType;
  digitalName: DigitalName;
  birthDate?: BirthDate;
}
export interface GetRelationshipsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetRelationshipsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostRelationshipsRequestBodyDTO {
  relationship: Relationship1;
}
export interface Relationship1 {
  type: FamilyRelationshipType;
  prefix: Prefix1;
  firstName: RelatedContactFirstName;
  middleName?: RelatedContactMiddleName;
  lastName: RelatedContactLastName;
  suffixPersonal?: SuffixPersonal1;
  suffixProfessional?: SuffixProfessional1;
  birthDate?: RelatedContactDateOfBirth;
  affiliationType?: AffiliationType;
}
export interface PostRelationshipsCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostRelationshipsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostRelationshipsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostRelationshipsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetSkillsandspecialitiesSuccessResponseDTO {
  skillsAndSpecialties?: SkillsAndSpecialties;
}
export interface SkillAndSpecialty {
  id: Id_1;
  description: Description;
  dataSource: DataSource;
}
export interface GetSkillsandspecialitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetSkillsandspecialitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostSkillsandspecialitiesRequestBodyDTO {
  skillAndSpecialty: SkillAndSpecialty1;
}
export interface SkillAndSpecialty1 {
  description: Description;
  dataSource: DataSource;
}
export interface PostSkillsandspecialitiesCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostSkillsandspecialitiesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostSkillsandspecialitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostSkillsandspecialitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutSkillsandspecialitiesRequestBodyDTO {
  skillAndSpecialty: SkillAndSpecialty1;
}
export interface PutSkillsandspecialitiesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutSkillsandspecialitiesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutSkillsandspecialitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutSkillsandspecialitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteSkillsandspecialitiesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteSkillsandspecialitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteSkillsandspecialitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetStudentactivitiesSuccessResponseDTO {
  studentActivities?: StudentActivities;
}
/**
 * Object that Includes the following data elements -  Student Activity participation details of constituent
 */
export interface StudentActivity {
  id: Id_1;
  description: StudentActivityDescription;
  category: Category;
  userUpdatesAccepted: UserUpdatesAccepted;
  startDate?: StartDate;
  stopDate?: StopDate;
}
export interface GetStudentactivitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetStudentactivitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostStudentactivitiesRequestBodyDTO {
  studentActivity: StudentActivity1;
}
/**
 * Object that Includes the following data elements -  Student Activity participation details of constituent
 */
export interface StudentActivity1 {
  description: StudentActivityDescription;
  startDate: StartDate;
  stopDate: StopDate;
}
export interface PostStudentactivitiesCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostStudentactivitiesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostStudentactivitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostStudentactivitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutStudentactivitiesRequestBodyDTO {
  studentActivity: StudentActivity1;
}
export interface PutStudentactivitiesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutStudentactivitiesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutStudentactivitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutStudentactivitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteStudentactivitiesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteStudentactivitiesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteStudentactivitiesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetStudentresidencesSuccessResponseDTO {
  studentResidences?: StudentResidences;
}
/**
 * Object that Includes the following data elements -  Student Residence participation details of constituent
 */
export interface StudentResidence {
  id: Id_1;
  description: StudentResidenceDescription;
  startDate?: StartDate;
  stopDate?: StopDate;
  participationType: ParticipationType;
  userUpdatesAccepted: UserUpdatesAccepted;
}
export interface GetStudentresidencesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetStudentresidencesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostStudentresidencesRequestBodyDTO {
  studentResidence: StudentResidence1;
}
/**
 * Object that Includes the following data elements -  Student Residence participation details of constituent
 */
export interface StudentResidence1 {
  description: StudentResidenceDescription;
  startDate: StartDate;
  stopDate: StopDate;
  participationType: ParticipationType;
}
export interface PostStudentresidencesCreatedResponseDTO {
  id?: ID;
  encodedSUID?: EncodedSUID;
  status?: number;
  /**
   * Success message to be shown to the user
   */
  message?: string;
}
export interface PostStudentresidencesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostStudentresidencesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostStudentresidencesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutStudentresidencesRequestBodyDTO {
  studentResidence: StudentResidence1;
}
export interface PutStudentresidencesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutStudentresidencesBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutStudentresidencesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutStudentresidencesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteStudentresidencesSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteStudentresidencesNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteStudentresidencesMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetUrlsSuccessResponseDTO {
  urls?: Urls;
}
export interface Url {
  id: URLCommunicationMethodID;
  type: UrlType;
  url: Url1;
}
export interface GetUrlsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetUrlsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostUrlsRequestBodyDTO {
  url: Url2;
}
export interface Url2 {
  type: UrlType;
  url: Url1;
}
export interface PostUrlsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostUrlsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PostUrlsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutUrlsRequestBodyDTO {
  url: Url2;
}
export interface PutUrlsSuccessResponseDTO {
  [k: string]: unknown;
}
export interface PutUrlsBadRequestErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutUrlsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface PutUrlsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteUrlsSuccessResponseDTO {
  [k: string]: unknown;
}
export interface DeleteUrlsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface DeleteUrlsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetVarsitysportsSuccessResponseDTO {
  varsitySports?: VarsitySports;
}
/**
 * Object that Includes the following data elements - varsity sport participation details of constituent
 */
export interface VarsitySport {
  id: ID;
  description: VarsitySportDescription;
}
export interface GetVarsitysportsNotFoundErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
export interface GetVarsitysportsMethodNotAllowedErrorResponseDTO {
  status?: number;
  /**
   * Error message to be shown to the user
   */
  message?: string;
  errors?: string[];
  error?: string;
}
