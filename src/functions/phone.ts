export function MobileNumberWithExtension(phoneNumber: string): string { return `+353${phoneNumber.substring(1)}` };

export function MobileNumberNoExtension(phoneNumber: string): string { return `0${phoneNumber.substring(4)}` };
