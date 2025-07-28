export function slugifyCategory(name : string):string{
    return name
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/\s+/g, '-');
}

export function unslugifyCategory(slug: string): string {
    return slug
      .replace(/-/g, ' ')
      .replace('mens', "men's")
      .replace('womens', "women's");
  }