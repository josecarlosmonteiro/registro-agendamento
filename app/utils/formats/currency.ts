export function currency(value?: string | number) {
  if (!value) return '';

  return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}