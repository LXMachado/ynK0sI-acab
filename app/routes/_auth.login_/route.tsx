import { Api } from '@/core/trpc'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { Button, Flex, Form, Input, Typography, message } from 'antd'
import { useEffect, useState } from 'react'
import { AuthenticationClient } from '~/core/authentication/client'
import { ErrorBoundary } from '@/designSystem/core/ErrorBoundary'

function LoginPage() {
  const router = useNavigate()
  const [searchParams] = useSearchParams()

  const [form] = Form.useForm()
  const [isLoading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState('')

  const { mutateAsync: login } = Api.authentication.login.useMutation({
    onSuccess: data => {
      setLoading(false)
      if (data.redirect) {
        try {
          window.location.href = data.redirect
        } catch (error) {
          message.error(`Navigation failed: ${error.message}`)
        }
      }
    },
  })

  const errorKey = searchParams.get('error')

  const errorMessage = {
    Signin: 'Try signing in with a different account.',
    OAuthSignin: 'Try signing in with a different account.',
    OAuthCallback: 'Try signing in with a different account.',
    OAuthCreateAccount: 'Try signing in with a different account.',
    EmailCreateAccount: 'Try signing in with a different account.',
    Callback: 'Try signing in with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    default: 'Unable to sign in.',
  }[errorKey ?? 'default']

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode detected - setting test credentials')
      form.setFieldValue('email', 'test@test.com')
      form.setFieldValue('password', 'password')
      message.warning('Using development credentials')
    }
  }, [])

  const handleSubmit = async (values: any) => {
    setLoading(true)
    setLoginError('')

    if (process.env.NODE_ENV === 'development') {
      console.log('Login attempt:', {
        email: values.email,
        timestamp: new Date().toISOString()
      })
    }

    try {
      await login({ email: values.email, password: values.password })
    } catch (error) {
      if (!navigator.onLine) {
        setLoginError('Network error: Please check your internet connection')
        message.error('Network error: Please check your internet connection')
      } else if (error.message.includes('Network Error')) {
        setLoginError('Network error: Unable to reach the server')
        message.error('Network error: Unable to reach the server')
      } else if (error.message.includes('Invalid credentials')) {
        setLoginError('Authentication failed: Invalid email or password')
        message.error('Authentication failed: Invalid email or password')
      } else {
        setLoginError(`Login error: ${error.message}`)
        message.error(`Login error: ${error.message}`)
      }
      setLoading(false)
    }
  }

  return (
    <Flex align="center" justify="center" vertical flex={1}>
      <Flex
        vertical
        style={{
          width: '340px',
          paddingBottom: '50px',
          paddingTop: '50px',
        }}
        gap="middle"
      >
        <AppHeader description="Welcome!" />

        {(errorKey || loginError) && (
          <Typography.Text type="danger">
            {loginError || errorMessage}
          </Typography.Text>
        )}

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input type="email" placeholder="Your email" autoComplete="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input.Password
              type="password"
              placeholder="Your password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="end">
              <Button
                type="link"
                onClick={() => router('/reset-password')}
                style={{ padding: 0, margin: 0 }}
              >
                Forgot password?
              </Button>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <AuthenticationClient.SocialButtons />

        <Button
          ghost
          style={{ border: 'none' }}
          onClick={() => router('/register')}
        >
          <Flex gap={'small'} justify="center">
            <Typography.Text type="secondary">No account?</Typography.Text>{' '}
            <Typography.Text>Sign up</Typography.Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}
