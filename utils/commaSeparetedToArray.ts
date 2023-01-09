export const commaSeparatedToArray = (commaSeparated: string) => {
    const array = commaSeparated.split(',');
    return array.map((item) => item.trim());
};
