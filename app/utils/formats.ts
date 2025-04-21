export function currency(value?: string | number) {
  if (!value) return;

  return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

export function localeDate(dateTime: string) {
  return new Date(dateTime).toLocaleDateString('pt-br', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}