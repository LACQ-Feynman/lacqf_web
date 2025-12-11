export function getTranslationKey(sectionId) {
  // Map specific section IDs to translation keys when they differ.
  switch (sectionId) {
    case 'patronum':
      return 'patron';
    case 'universities':
      return 'universities';
    case 'sponsors':
      return 'sponsors';
    case 'values':
      return 'values';
    default:
      return sectionId;
  }
}