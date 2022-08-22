import { mask } from 'remask';

export function maskPhoneNumber(value: string) {
  if (!value) return;
  const cellphone = ['(99) 9 9999-9999'];

  return mask(value, cellphone);
}
