export const convertParaToBulletPoints = (para: string) => {
    let bulletPoints = para.split('\n');

    bulletPoints = bulletPoints.filter((bulletPoint) => bulletPoint.length > 4);

    return bulletPoints;
};
