const register = (req, res) => {
  const { name, email, password } = req.body

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'All fields are required'
    })
  }

  const emailRegex = /\S+@\S+\.\S+/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Invalid email format'
    })
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters'
    })
  }

  console.log('VALID DATA:', req.body)

  return res.status(201).json({
    message: 'User registered successfully'
  })
}

module.exports = { register }
