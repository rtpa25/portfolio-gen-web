const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const dateConverter = (date: string) => {
    const dateArray = date.split('-');
    const year = dateArray[0];
    const month = parseInt(dateArray[1]);
    return `${months[month - 1]} ${year}`;
};
