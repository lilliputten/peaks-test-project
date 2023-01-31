/** @module strings
 *  @description Strings utilities
 *  @since 2023.02.01, 00:37
 *  @changed 2023.02.01, 00:37
 */

import * as constantsConfig from '@/config/constants';
import { format } from 'date-fns';

export function formatIsoDateString(dateStr: string, formatStr?: string): string {
  if (!formatStr) {
    formatStr = constantsConfig.dateTimeFormat;
  }
  const date = new Date(dateStr);
  return format(date, formatStr);
}
