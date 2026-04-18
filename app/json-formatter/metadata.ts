import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'JSON Formatter & Validator Online Free — Pretty Print JSON | DevBench',
    description: 'Free JSON formatter and validator tool online. Pretty print JSON, validate syntax, minify, and explore JSON structure with tree view. No installation needed.',
    keywords: 'json formatter, json validator, pretty print json, minify json, validate json, online json tool',
    authors: [{ name: 'DevBench' }],
    openGraph: {
      type: 'website',
      title: 'JSON Formatter & Validator — DevBench',
      description: 'Format, validate, and minify JSON instantly in your browser.',
      url: 'https://devbench.vercel.app/json-formatter',
    },
    twitter: {
      card: 'summary',
      title: 'JSON Formatter & Validator — DevBench',
      description: 'Format, validate, and minify JSON instantly.',
    },
  };
};
