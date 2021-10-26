import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function register(req, res) {
  try {
    const post = await prisma.user.create({
      data: {
        slug: req.body.slug,
        title: req.body.title,
      },
    })

    console.log(post)

    return res.status(201).json({ msg: 'Cadastro efetuado com sucesso!' })
  } catch (error) {
    return res.status(400).json({ msg: 'Deu Erro' })
  }
}

async function getAll(req, res) {
  try {
    const data = await prisma.user.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
      },
    })

    return res.status(201).json(data)
  } catch (error) {
    return res.status(400).json({ msg: 'Deu Erro' })
  }
}

async function getOne(req, res) {
  try {
    const data = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        id: true,
        title: true,
        slug: false,
      },
    })

    return res.status(201).json(data)
  } catch (error) {
    return res.status(400).json({ msg: 'Deu Erro' })
  }
}

async function update(req, res) {
  try {
    await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        title: req.body.title,
        slug: req.body.slug,
      },
    })

    return res.status(201).json({ msg: 'Ataulizou!!' })
  } catch (error) {
    return res.status(400).json({ error, msg: 'Deu Erro' })
  }
}

async function deletoOne(req, res) {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    })

    return res.status(201).json({ msg: 'Deletou!!' })
  } catch (error) {
    return res.status(400).json({ error, msg: 'Deu Erro' })
  }
}

export default { register, getAll, getOne, update, deletoOne }
