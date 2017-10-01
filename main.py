# https://cloud.google.com/appengine/docs/python/console/managing-datastore
# delete embedded social media from deployed appspot^^


from google.appengine.api import users
import webapp2
import jinja2
from google.appengine.ext import ndb
import logging

#this is the line of code that allows for you to connect the main.py with the templates

env = jinja2.Environment(loader=jinja2.FileSystemLoader('templates'))


# the signIn class is taken from the 'googleusers' lab we did in class
# also (going to create) a template to make the pages in the 'if' () and 'else'
# statements look nicer
class signIn(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        template = env.get_template('index.html')
        if user:
            self.response.out.write(template.render())
        else:
            template = env.get_template('signIn.html')
            greeting = ('<a href="%s"></a>' % users.create_login_url('/'))
            self.response.out.write('<html><body>%s</body></html>' % greeting)
            variables = {
                "login" : users.create_login_url('/')
            }
            self.response.out.write(template.render(variables))

# the mainHandler class will be the page that allows the user to post photos/statuses
# and the list of all the social media apps will be displayed on this page as well
# you will also need to link the facebook/twitter/etc handlers and htmls to this class
class signOutHandler(webapp2.RequestHandler):
    def get(self):
        signouturl = users.create_logout_url('/')
        self.redirect(signouturl)

app = webapp2.WSGIApplication([
    ('/', signIn),
    ('/signOutHandler', signOutHandler),

], debug=True)
