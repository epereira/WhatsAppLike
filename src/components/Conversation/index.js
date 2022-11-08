import React from 'react'
import { Stack, Box, Avatar, Badge } from '@mui/material'
import { faker } from '@faker-js/faker'

const Conversation = () => {
  return (
    <Stack height="100%" maxHeight={"100vh"} width={"auto"}>
        {/* chat header */}
        <Box sx={{height: 100, width: "100%", backgroundColor:"#F8FAFF"}}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{height: "100%", width: "100%"}}>
            <Box>
                <Stack direction="row" alignItems="center" spacing={2} sx={{height: "100%", width: "100%"}}>
                    <Badge>
                        <Avatar src={faker.image.avatar()} sx={{width: 40, height: 40}} />
                    </Badge>
                    
                </Stack>
            </Box>
        </Stack>
        </Box>
        {/* msg */}
        <Box width="100%" sx={{flexGrow: 1, backgroundColor: "#fff"}}>
        </Box>
        {/* chat footer */}
        <Box sx={{height: 100, width: "100%", backgroundColor:"#000"}}>
    
        </Box>
    </Stack>
  )
}

export default Conversation
