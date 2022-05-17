interface EmailTemplate {
  [key: string]: {
    subject: (title?: string) => string;
    body?: string;
  };
}

const emailTemplate: EmailTemplate = {
  rental: {
    subject(title?: string) {
      return encodeURIComponent(`Rental Inquiry: ${title}`);
    },
    body: encodeURIComponent(
      "Ensemble:\n\n" +
        "Conductor:\n\n" +
        "Performance date(s):\n\n" +
        "Performance location(s):\n\n" +
        "Strings required:\n\n" +
        "Full scores required:\n\n" +
        "Deliver by:\n\n" +
        "Other requests:\n\n"
    ),
  },
  purchase: {
    subject(title?: string) {
      return encodeURIComponent(`Inquiry: ${title}`);
    },
    body: encodeURIComponent(
      "Ensemble:\n\n" +
        "Conductor:\n\n" +
        "Performance date(s):\n\n" +
        "Performance location(s):\n\n" +
        "Deliver by:\n\n" +
        "Other requests:\n\n"
    ),
  },
  general: {
    subject() {
      return encodeURIComponent("General Inquiry");
    },
  },
};

export default emailTemplate;
