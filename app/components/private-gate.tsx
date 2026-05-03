'use client'

import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'

export function PrivateGate() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/private-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        setError('Incorrect password.')
        return
      }

      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section>
      <h1 className="mb-4 text-4xl font-semibold tracking-tighter">
        private journal
      </h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        enter the password to continue.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 max-w-sm">
        <input
          className="border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent px-3 py-2 text-sm"
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
          required
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-3 py-2 text-sm hover:bg-neutral-800 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
          disabled={isLoading}
        >
          {isLoading ? 'checking…' : 'unlock'}
        </button>
        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : null}
      </form>
    </section>
  )
}
