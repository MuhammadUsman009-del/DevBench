/**
 * Cryptographic utilities for hashing
 * Uses Web Crypto API for SHA and md5 library for MD5
 */
import md5 from 'md5';

export interface HashResult {
  algorithm: string;
  hash: string;
}

const sha256 = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

const sha512 = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-512', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

const sha1 = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-1', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

const md5Hash = (data: string): string => {
  return md5(data);
};

export const generateHashes = async (
  input: string
): Promise<HashResult[]> => {
  const results: HashResult[] = [];

  try {
    results.push({
      algorithm: 'MD5',
      hash: md5Hash(input),
    });
  } catch (err) {
    console.error('MD5 error:', err);
  }

  try {
    results.push({
      algorithm: 'SHA-1',
      hash: await sha1(input),
    });
  } catch (err) {
    console.error('SHA-1 error:', err);
  }

  try {
    results.push({
      algorithm: 'SHA-256',
      hash: await sha256(input),
    });
  } catch (err) {
    console.error('SHA-256 error:', err);
  }

  try {
    results.push({
      algorithm: 'SHA-512',
      hash: await sha512(input),
    });
  } catch (err) {
    console.error('SHA-512 error:', err);
  }

  return results;
};

export const compareHashes = (hash1: string, hash2: string): boolean => {
  return hash1.toLowerCase() === hash2.toLowerCase();
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
