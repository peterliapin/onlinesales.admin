const mappings = [
  {
    label: "First Name",
    key: "firstName",
    alternateMatches: ["first name", "first"],
    fieldType: {
      type: "input",
    },
    example: "Stephanie",
    validations: [],
  },
  {
    label: "Last Name",
    key: "lastName",
    alternateMatches: ["last name", "last"],
    fieldType: {
      type: "input",
    },
    example: "Stephanie",
    validations: [],
  },
  {
    label: "Email",
    key: "email",
    alternateMatches: ["email address"],
    fieldType: {
      type: "input",
    },
    example: "Stephanie@wa.com",
    validations: [
      {
        rule: "required",
        errorMessage: "Email is required",
        level: "error",
      },
      {
        rule: "unique",
        errorMessage: "Email should be unique",
        level: "error",
      },
    ],
  },
  {
    label: "Company",
    key: "companyName",
    alternateMatches: ["Office", "Work"],
    fieldType: {
      type: "input",
    },
    example: "waveaccess",
    validations: [],
  },
  {
    label: "Address 1",
    key: "address1",
    alternateMatches: ["address 1"],
    fieldType: {
      type: "input",
    },
    example: "Main street",
    validations: [],
  },
  {
    label: "Address 2",
    key: "address2",
    alternateMatches: ["address 2"],
    fieldType: {
      type: "input",
    },
    example: "2nd Lane",
    validations: [],
  },
  {
    label: "State",
    key: "state",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "Western",
    validations: [],
  },
  {
    label: "Zip",
    key: "zip",
    alternateMatches: ["zip code"],
    fieldType: {
      type: "input",
    },
    example: "100",
    validations: [],
  },
  {
    label: "Location",
    key: "location",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "Colombo",
    validations: [],
  },
  {
    label: "Phone",
    key: "phone",
    alternateMatches: ["Telephone no", "Telephone number", "Phone number"],
    fieldType: {
      type: "input",
    },
    example: "+94776548859",
    validations: [],
  },
  {
    label: "Timezone",
    key: "timezone",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "-330",
    validations: [],
  },
  {
    label: "Language",
    key: "language",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "en",
    validations: [],
  },
  {
    label: "Id",
    key: "id",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "123",
    validations: [],
  },
  {
    label: "Created At",
    key: "createdAt",
    alternateMatches: ["Created Time", "Created"],
    fieldType: {
      type: "input",
    },
    example: "2023-02-18T02:29:39",
    validations: [],
  },
  {
    label: "Updated At",
    key: "updatedAt",
    alternateMatches: ["Updated Time", "Updated"],
    fieldType: {
      type: "input",
    },
    example: "2023-02-18T02:29:39",
    validations: [],
  },
  {
    label: "Created By IP",
    key: "createdByIp",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "172.166.5.5",
    validations: [],
  },
  {
    label: "Created By User Agent",
    key: "createdByUserAgent",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "Chrome",
    validations: [],
  },
  {
    label: "Updated By IP",
    key: "UpdatedByIp",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "172.166.5.5",
    validations: [],
  },
  {
    label: "Updated By User Agent",
    key: "updatedByUserAgent",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "Chrome",
    validations: [],
  },
  {
    label: "Source",
    key: "source",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "www.testdetails.com",
    validations: [],
  },
  {
    label: "Account Id",
    key: "accountId",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "123",
    validations: [],
  },
  {
    label: "Account Name",
    key: "accountName",
    alternateMatches: [],
    fieldType: {
      type: "input",
    },
    example: "ABC Holdings",
    validations: [],
  },
];

const getMappings = (key: string) => {
  const fieldsSet = mappings.find((fieldsSet) => fieldsSet.key === key);
  if (fieldsSet) {
    return fieldsSet;
  }
  return null;
};

export const getImportFields = (importModel: any) => {
  const importContactFields = Object.keys(importModel).map((key) => {
    const mappings = getMappings(key);
    if (mappings) {
      return mappings;
    }
    return {
      key,
      label: key,
      alternateMatches: [],
      fieldType: {
        type: "input",
      },
      example: "",
      validations: [],
    };
  });
  return importContactFields;
};
