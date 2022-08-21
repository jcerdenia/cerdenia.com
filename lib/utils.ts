// Get text up to first period and without HTML tags.
export const excerpt = (text: string): string => {
  return text.slice(0, text.indexOf(". ") + 1).replace(/(<([^>]+)>)/gi, "");
};

// Function to return a custom comparator for sorting objects by property.
// Use with sort(), e.g., sort(compareBy("prop"))
export const compareBy = (prop: string): ((a: any, b: any) => 1 | -1 | 0) => {
  return (objA: any, objB: any) => {
    const [a, b] = [objA, objB].map((obj) => {
      return typeof obj[prop] === "string"
        ? obj[prop].toLowerCase().replace(/\W/g, "")
        : obj[prop];
    });

    return a < b ? -1 : a > b ? 1 : 0;
  };
};

// Can receive raw date either as a single date, e.g., "2022-04-15"
// Or as a range, e.g. "2022-04-15,2022-04-18"
export const formatDate = (dateString: string, options: any = {}): string => {
  const rawDates: string[] = dateString.split(",");

  const dates: string[] = rawDates.map((rawDate) => {
    const [year, month, day] = rawDate
      .split("-")
      .map((val: any): number => val * 1);

    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setDate(day || 1);

    return date.toLocaleString("en-GB", {
      day: day ? "numeric" : undefined,
      month: "short",
      year: "numeric",
      ...options,
    });
  });

  if (dates.length > 1) {
    const days = dates.map((d) => d.split(" ")[0]);
    const months = dates.map((m) => m.split(" ")[1]);
    const years = dates.map((y) => y.split(" ")[2]);

    const isSameMonth = months[0] === months[1];
    const isSameYear = years[0] === years[1];

    switch (true) {
      case isSameYear && isSameMonth: {
        const year = years[0];
        const month = months[0];
        const range = days.join("-");

        return `${range} ${month} ${year}`;
      }

      case isSameYear && !isSameMonth: {
        const year = years[0];
        const rangeStart = `${days[0]} ${months[0]}`;
        const rangeEnd = `${days[1]} ${months[1]}`;

        return `${rangeStart}-${rangeEnd} ${year}`;
      }

      default:
        return dates.join("-");
    }
  }

  return dates[0];
};

export const slugify = (text: string): string => {
  return text.split(" ").join("-").toLowerCase();
};

export const unslugify = (text: string): string => {
  return text.split("-").join(" ");
};

export const capitalize = (text: string): string => {
  return text
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

export const shorten = (text: string): string => {
  const words = text.split(" ");
  return words.slice(0, 8).join(" ") + (words.length > 8 ? "…" : "");
};
