/** @module parseQuery
 *  @description Parse query search string
 *  @since 2022.01.17, 13:55
 *  @changed 2022.01.17, 13:55
 */

function decodeQuery(
  qs?: string,
  sep?: string,
  eq?: string,
  options?: Record<string, unknown>,
): Record<string, unknown> {
  sep = sep || '&';
  eq = eq || '=';
  const obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  const regexp = /\+/g;
  const qsList = qs.split(sep);

  let maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  let len = qsList.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (let i = 0; i < len; ++i) {
    const x = qsList[i].replace(regexp, '%20');
    const idx = x.indexOf(eq);
    let kstr, vstr; // , k, v

    if (idx >= 0) {
      kstr = x.substring(0, idx);
      vstr = x.substring(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    const k = decodeURIComponent(kstr) as never;
    const v = decodeURIComponent(vstr) as never;

    if (!Object.prototype.hasOwnProperty.call(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      (obj[k] as unknown[]).push(v);
    } else {
      (obj[k] as unknown) = [obj[k], v];
    }
  }

  return obj;
}

/** Parse url query string (in form `?xx=yy&...` or `xx=yy&...`)
 * @param {string} search - Query string
 * @return {object} query - Query object
 */
export function parseQuery(search: string): Record<string, unknown> {
  if (search.indexOf('?') === 0) {
    search = search.substr(1);
  }
  return decodeQuery(search);
}
