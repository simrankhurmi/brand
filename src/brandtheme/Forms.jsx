import React from 'react'

const Forms = () => {
  return (
    <>
    <section className="form" id='contacts'>
            <section className="form_heading">
                <h1>Interested in</h1>
            </section>
            <section className="form_subheading">
                <h1>Working with Us?</h1>
            </section>
            <section className="form_contenttable">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label for="n">Name</label>
                                <input className="form_contenttable--name" type="text" name="name" id="n"/>
                            </td>
                            <td>
                                <label for="e">Email</label>
                                <input className="form_contenttable--email" type="email" name="em" id="e"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="p">Phone</label>
                                <input className="form_contenttable--phone" type="Number" name="no." id="p"/>
                            </td>
                            <td>
                                <label for="c">Company</label>
                                <input className="form_contenttable--company" type="text" name="com" id="c"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="w">Website</label>
                                <input className="form_contenttable--web" type="text" name="ww" id="w"/>
                            </td>
                            <td>
                                <label for="bo">Budget(Optional)</label>
                                <input className="form_contenttable--bud" type="text" name="budget" id="bo"/>
                            </td>
                        </tr>

                        <tr>
                            <td colspan="2">
                                <label for="mess" className="textarea">Message</label>
                                <textarea className="form_contenttable--msg" name="message" id="mess" cols="80" rows="4"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td><input className="form_contenttable--button
                                " type="submit" value="SUBMIT FORM"/></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>

    </>
  )
}

export default Forms