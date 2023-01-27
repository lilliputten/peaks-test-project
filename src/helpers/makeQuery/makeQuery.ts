/** @module makeQuery
 *  @description Build query search string
 *  @since 2019.05.28, 11:34
 *  @changed 2020.04.30, 00:55
 *  TODO 2020.12.21, 18:05 -- Move to `webUiCore.utils`?
 */

// TODO: Move to `parseQuery` (and rename module)?

/** Parse url query string (in form `?xx=yy&...` or `xx=yy&...`)
 * @param {object} data - Query object
 * @param {object} [opt] - Options
 * @param {String} [opt.prefix] - Query prefix symbol (default: '?')
 * @param {String} [opt.delimiter] - Delimiter symbol (default: '&')
 * @param {Boolean} [opt.preserveNullable] - Preserve null & undefined values as 'null' & 'undefined' crsp.
 * @param {Boolean} [opt.omitEmpty] - Skip empty parameters (empty string, false, null, undefined).
 * @return {string} search - Query string
 */
export function makeQuery(
  data: Record<string, string | number | boolean>,
  opt: Record<string, boolean | string>,
): string {
  // opt = opt || {};
  opt = Object.assign({ prefix: '?', delimiter: '&' }, opt);

  const keys = Object.keys(data);
  const items: [key: string, val: string | number | boolean][] = [];
  keys.forEach((key) => {
    const val = data[key];
    // Adds delimiter if query isnt empty...
    if (val && Array.isArray(val)) {
      // TODO: Make lists as series of `key=val1&key=val2...` pairs or single value like `key=val1,val2...` depends on option parameter (`serializeArrays`)?
      val.forEach((val) => {
        items.push([key, val]);
      });
    } else {
      items.push([key, val]);
    }
  });
  const query: string = items.reduce((query: string, [key, val]) => {
    if ((val != null && val !== false && val !== '') || !opt.omitEmpty) {
      // Convert nulls to empty string if preserveNullable flag isn't specified
      if (!opt.preserveNullable && val == null) {
        val = '';
      }
      // Adds delimiter if query isnt empty...
      if (query) {
        query += opt.delimiter as string;
      }
      query += encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }
    return query;
  }, '');

  return opt.prefix ? opt.prefix + query : query;
}
