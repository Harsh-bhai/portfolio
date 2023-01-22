import React from 'react'

const Apple = () => {
  return (
<p className="typing animation-typing">
   Hello mera naam hai harsh
    <style jsx>{`@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

.typing {
    width: 100%;
    overflow: hidden;
    animation: typing 5s steps(40, end) infinite;
}
`}</style>
</p>


  )
}

export default Apple