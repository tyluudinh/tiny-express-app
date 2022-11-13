export const isProd = process.env.NODE_ENV === 'production';

export const envStage = process.env.NODE_ENV || 'development';


/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | unknown): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else return value !== null && typeof value === 'object' && !Object.keys(value as Record<string, unknown>).length;
};


export async function sleep(timeOut = 1000): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeOut);
  });
}


