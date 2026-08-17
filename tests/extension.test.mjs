// Unit tests for pi-gemini-multimodal helpers (no network, no real agy).
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { guessMime } from '../extensions/index.ts'

describe('guessMime', () => {
  it('maps common extensions', () => {
    assert.equal(guessMime('a.png'), 'image/png')
    assert.equal(guessMime('clip.mp4'), 'video/mp4')
    assert.equal(guessMime('voice.m4a'), 'audio/mp4')
    assert.equal(guessMime('doc.pdf'), 'application/pdf')
    assert.equal(guessMime('https://x.com/a.webp?q=1'), 'image/webp')
  })

  it('falls back to octet-stream', () => {
    assert.equal(guessMime('noext'), 'application/octet-stream')
  })
})
