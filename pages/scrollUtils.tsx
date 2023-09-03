// scrollUtils.tsx
export const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
