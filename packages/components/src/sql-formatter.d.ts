declare module "sql-formatter-plus" {
  /**
   * Supported SQL dialects
   */
  export type Dialect = "sql" | "db2" | "plsql" | "n1ql" | "mysql" | "postgresql" | "tsql";

  /**
   * Configuration options for formatting
   */
  export interface FormatOptions {
    /** Number of spaces or string to use for indentation (default: '  ') */
    indent?: string;
    /** Convert keywords to uppercase (default: true) */
    uppercase?: boolean;
    /** Dialect of SQL to format (default: 'sql') */
    language?: Dialect;
    /** Number of lines between formatted queries (default: 1) */
    linesBetweenQueries?: number;
    /** Align alias names in SELECT statements (default: false) */
    tabulateAlias?: boolean;
  }

  /**
   * Formats the given SQL string according to the specified options.
   * @param query - The SQL query to format
   * @param config - Formatting options
   * @returns Formatted SQL string
   */
  export function format(query: string, config?: FormatOptions): string;
}
