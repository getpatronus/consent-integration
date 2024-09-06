config = {
    consent: {
        languages: ["English"],
        logo: "",
        content: {
            titles: {
                ConsentNotice: {
                    English: "Consent Notice",
                },
                PersonalDataBeingCollected: {
                    English: "Personal Data being Collected",
                },
                Declaration: {
                    English: "Declaration",
                },
                RevocationOfConsent: {
                    English: "Revocation of Consent",
                },
                GrievanceRedressal: {
                    English: "Grievance Redressal",
                },
                DataPrincipalsRights: {
                    English: "Data Principals Rights",
                },
                PurposeOfDataCollection: {
                    English: "Purpose of Data Collection",
                },
            },
            description: {
                English: "",
            },
            personal_data_items: [
                {
                    item: {
                        English: "Email",
                    },
                },
                {
                    item: {
                        English: "Phone",
                    },
                },
                {
                    item: {
                        English: "Name",
                    },
                },
            ],
            purposes: [
                {
                    id: "c5bcef44-b7db-4a4e-9ffc-81990ff9e583",
                    purpose_id: "FINA1",
                    title: {
                        English: "Customer Support and Service",
                    },
                    mandatory_text: {
                        English: "Mandatory",
                    },
                    description: {
                        English: "Description",
                    },
                    user_attributes: {
                        English: "User Attributes",
                    },
                    description_content: {
                        English:
                            "We need your contact details and information about your inquiry to provide you with the best possible support and service.",
                    },
                    pii_tags: [
                        {
                            id: "7c46d338-fc2e-45a4-9883-541d04d26c05",
                            keyword: {
                                English: "Abha Number",
                            },
                        },
                        {
                            id: "a6dba85e-0abf-480b-b78c-80db7c9cf916",
                            keyword: {
                                English: "Phone Number",
                            },
                        },
                        {
                            id: "2eff010c-49eb-4115-b7b0-84f163b3ad0c",
                            keyword: {
                                English: "Email Address",
                            },
                        },
                        {
                            id: "0d880fea-7ee5-40ab-90eb-e027421ff9f3",
                            keyword: {
                                English: "Name",
                            },
                        },
                    ],
                    retention_period: 20,
                    third_party: false,
                    mandatory: true,
                },
                {
                    id: "c5bcef44-b7db-4a4e-9ffc-81990ff9e583",
                    purpose_id: "FINA1",
                    title: {
                        English: "Marketing and Promotions",
                    },
                    mandatory_text: {
                        English: "Mandatory",
                    },
                    description: {
                        English: "Description",
                    },
                    user_attributes: {
                        English: "User Attributes",
                    },
                    description_content: {
                        English:
                            "We would like to use your email address and name to send you newsletters and special offers tailored to your interests",
                    },
                    pii_tags: [
                        {
                            id: "2eff010c-49eb-4115-b7b0-84f163b3ad0c",
                            keyword: {
                                English: "Email Address",
                            },
                        },
                    ],
                    retention_period: 20,
                    third_party: false,
                    mandatory: false,
                },
                {
                    id: "c5bcef44-b7db-4a4e-9ffc-81990ff9e583",
                    purpose_id: "FINA1",
                    title: {
                        English: "Legal and Regulatory Compliance",
                    },
                    mandatory_text: {
                        English: "Mandatory",
                    },
                    description: {
                        English: "Description",
                    },
                    user_attributes: {
                        English: "User Attributes",
                    },
                    description_content: {
                        English:
                            "We need your personal information to comply with legal obligations and regulatory requirements, and to respond to legal requests and investigations.",
                    },
                    pii_tags: [
                        {
                            id: "2eff010c-49eb-4115-b7b0-84f163b3ad0c",
                            keyword: {
                                English: "Email Address",
                            },
                        },
                        {
                            id: "2eff010c-49eb-4115-b7b0-84f163b3ad0c",
                            keyword: {
                                English: "Name",
                            },
                        },
                        {
                            id: "2eff010c-49eb-4115-b7b0-84f163b3ad0c",
                            keyword: {
                                English: "Phone Number",
                            },
                        },
                    ],
                    retention_period: 20,
                    third_party: false,
                    mandatory: true,
                },

                // Add more purposes here
            ],
            declaration: {
                English:
                    "The personal data collected by the organization will only be used for the purposes mentioned above and data will be retained for a specific period of time. After this, your data will be deleted after a period of time.",
            },
            officer: {
                email_of_officer: "email@example.com",
            },
            show_data_principal_rights_section: true,
            grievance_redressal: {
                content: {
                    English:
                        "If you have any complaints or concerns regarding your data, please contact us at: ",
                },
            },
            revocation_of_consent: {
                link_of_dsar_portal: "https://example.com/consent-manager",
                consent_manager_platform: {
                    English: "Consent Manager Platform.",
                },
                content: {
                    English: "If you wish to revoke your consent, please contact us at ",
                },
            },
            data_principal_rights_section: {
                items: [
                    {
                        text: {
                            English: "Access, correct or delete your personal data",
                        },
                    },
                    {
                        text: {
                            English: "Restrict or object to processing of your data",
                        },
                    },
                    {
                        text: {
                            English: "Obtain a copy of your data",
                        },
                    },
                ],
            },
            secondaryButtonText: {
                English: "Accept only mandatory and proceed",
            },
            submitButtonText: {
                English: "Submit",
            },
        },
    },
};