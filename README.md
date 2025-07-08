# normal-website-

what is HTML ?

HTML stands for Hyper Text Markup Language
HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
HTML is a markup language, not a programming language.

what is css?

it used to style our HTML pages.
its help to create a good view of our HTML pages 


after this i installed vs code 

Objective of chapter 2 (HTML)
HTML Structure , elements, metatags, images, anchor tags, tables, forms, id, classes, div, span, entities, etc...

The <!DOCTYPE html> declaration defines that this document is an HTML5 document
The <html> element is the root element of an HTML page
The <head> element contains meta information about the HTML page
The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
The <h1> element defines a large heading
The <p> element defines a paragraph

the <a> element for link the pages when we put the title tag in it toh jab hum hover krte hai toh uski kuch basic information dikhti hai link ke bina open hue
the <img> element to use image in our website 

 Types of Lists:
Tag	Use
<ul>	Unordered List (● bullets)
<ol>	Ordered List (1, 2, 3...)
<li>	List Item (har item ke liye)
<dl>	Description List (terms + descriptions)
<dt>	Description Term
<dd>	Description Detail

aur list me hum text paragraph image video audio link etc.... saare cheeze daal sakte hai 

today i learned about how to write the cv in HTML
 next learned about talbes and its features 
 able Elements with Description:
Tag	Description
<table>	Table banata hai
<tr> (table row)	Ek row define karta hai
<th> (table header)	Heading cell (bold + center by default)
<td> (table data)	Normal cell
<thead>	Table ke header section ko group karta hai
<tbody>	Main data rows ka group
<tfoot>	Table ke end (footer) section
colspan	 - Cell ko multiple columns me extend karta hai
rowspan	 - Cell ko multiple rows me extend karta hai

<i> ye wala tag text ko italic me convert krne ke liye use hota hai 
next is form 

Bhai 💡 forms HTML ka sabse important part hote hain jab tu user se input lena chahta hai — jaise:

Login / Signup

Contact Us

Search Bar

Payment Form

Feedback / Survey

🔍 Form Tags & Elements with Description
Tag / Attribute	Purpose
<form>	Form container hota hai
action=""	Form data kahan bhejna hai (URL)
method="get/post"	Kaise bhejna hai (GET = URL me, POST = secure body me)
<input>	Text, email, password, etc. ke liye input
<label>	Input ka label batata hai
<textarea>	Multi-line input field
<select> + <option>	Dropdown banata hai
<button> or input type="submit"	Submit button
name=""	Input ka name — server-side processing ke liye
value=""	Input ka default value
placeholder=""	Input me hint text
required	Field must fill
disabled, readonly	Control over editing

humne iske aage js me forms ki information ko save krne ke liye functionality di jisse humne form ko submit krne ke baad data ko console me dekh sakte hai aur edit aur delete bhi kar sakte hai


Class and ID attributes 
class ko multipule html elements share kr sakte hai
class ka use hum styling ke liye aur js me bhi kr sakte jiske through elements ko manipulate kr sakte hai 
class ko style krte hai jab toh dot lga ke class name aur parantheses me jo bhi style krna ho bo 

id attribute ek uniqueness provide krta hai kisi bhi ek html element ko aur iska use hum do baar nhi kr sakte same name se 
ID ko style krne ke liye hum hashtag aur id name use krte hai aur agge parentheses lga ki jo bhi style krna ho bo 

Note: The id name is case sensitive!

Note: The id name must contain at least one character, cannot start with a number, and must not contain whitespaces (spaces, tabs, etc.).

div and span tags 
div ek dontainer ki tarah use hota jiske ander hum aur bhi element daal sakte hai 
div aagar hum use krte hai toh ye jaha use hota hai uske pehle aur baad me line breaks aapne aap aate hai 
The <div> element has no required attributes, but style, class and id are common.
div ka common use web page ki sections ko group krne liye use hota hai 
