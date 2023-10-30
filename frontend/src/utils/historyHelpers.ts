import { History } from '../types';

export function addHistory(login: string, newValue: History) {
  const rawStr = localStorage.getItem(`${login}_history`) ?? '[]';
  const history = JSON.parse(rawStr);
  const newHistory = history.concat(newValue);
  localStorage.setItem(`${login}_history`, newHistory);
}

export function getHistory(login: string) {
  const rawStr = localStorage.getItem(`${login}_history`) ?? '[]';
  return JSON.parse(rawStr) as History[];
}
