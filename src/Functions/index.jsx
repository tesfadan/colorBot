import db from "../Firestore/firebase";

const deleteScheme = uid =>
    db
        .collection("schemes")
        .doc(uid)
        .delete();

export const FetchSchemes = ({ setSchemes }) => {
    db.collection("schemes")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc =>
                Object.assign({ uid: doc.id }, doc.data())
            );

            return data[0] !== undefined
                ? setSchemes(
                    data
                ) : null
        });
    // console.log("Running");
};




export const CopyToClipboard = (str) => {
    //techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
    // Create new element
    var el = document.createElement("textarea");
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand("copy");
    // Remove temporary element
    document.body.removeChild(el);
}

export const DeleteScheme = ({ setSchemes, schemes, index, uid }) => {
    schemes.splice(index, 1);

    db
        .collection("schemes")
        .doc(uid)
        .delete()
        .then(() =>
            setSchemes(schemes)
        )
}

export async function SaveScheme({ ...props }) {
    const { schemes, setSchemes, index, uid, colors, mode, setMode } = props;
    // console.log('SAVEVEE');
    // console.log(props);
    // console.log(mode.new);
    if (mode.new) {
        try {
            let newCont = { created: Date.now(), colors: [colors[0], colors[1], colors[2]] };
            // if new scheme 
            let res = await db.collection('schemes').add(newCont);
            setSchemes([...schemes, { uid: res.id, colors: [colors[0], colors[1], colors[2]] }]);
            // console.log(res);
            setMode({ dashboard: true, edit: false, new: false, index: '' });
            return res
        }
        catch (err) {
            console.log(err)
        }
    }

    else {
        // or update
        // console.log(colors);
        let newCont = { uid: uid, colors: [colors[0], colors[1], colors[2]] };
        // console.log(schemes[index]);
        schemes[index] = { uid: uid, colors: [colors[0], colors[1], colors[2]] };

        setSchemes(schemes);
        setMode({ dashboard: true, edit: false, new: false, index: '' });
        db
            .collection("schemes")
            .doc(uid)
            .update(newCont);
    }
}