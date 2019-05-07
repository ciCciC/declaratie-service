export class SecurityUtils {

  static cleanFilename(filename: string): string {
    const splitted = filename.split('.');
    return splitted.slice(0, splitted.length - 1)
      .join('')
      .replace(/(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script|#/, '') + '.' + splitted[splitted.length - 1];
  }
}
