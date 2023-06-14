import React from "react";

function MyContent(props) {
<<<<<<< HEAD
  return (
    <div>
    <p style={{  marginTop:'30px', textAlign:'justify',fontSize:'20px'}} class="mx-60">
        {props.element}
    </p>
    </div>
  )
=======
    return (
        <div>
            <p
                style={{
                    marginTop: "30px",
                    textAlign: "justify",
                    fontSize: "20px",
                }}
                class="mx-60"
            >
                {props.element}
            </p>

            <p
                style={{
                    marginTop: "30px",
                    textAlign: "justify",
                    fontSize: "20px",
                }}
                class="mx-60"
            >
                {props.element}
            </p>
        </div>
    );
>>>>>>> 3fbbf2a90bbbb0129615e077c018daaa2391787c
}

export default MyContent;
