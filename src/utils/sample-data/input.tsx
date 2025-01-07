interface Country {
    code: string;
    dialCode: string;
    flag: string;
  }

export const countries: Country[] = [
    { code: 'US', dialCode: '+1', flag: '🇺🇸' },
    { code: 'NG', dialCode: '+234', flag: '🇳🇬' },
    { code: 'GB', dialCode: '+44', flag: '🇬🇧' },
    { code: 'IN', dialCode: '+91', flag: '🇮🇳' },
    { code: 'CA', dialCode: '+1', flag: '🇨🇦' },
    { code: 'GH', dialCode: '+233', flag: '🇬🇭' },
  ];