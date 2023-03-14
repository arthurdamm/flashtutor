"""
Draws a rotating cube.
"""
import math
import random
import arcade

# --- Set up the constants

# Size of the screen

SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480

# Size of the cube
CUBE_SIZE = 50

# How fast the cube rotates
ROTATION_SPEED = 0.01

# How fast the camera moves
CAMERA_SPEED = 0.01

# How far away the camera is
CAMERA_DISTANCE = 500

# --- Set up the classes

class RotatingCube:
    """
    This class draws a rotating cube.
    """
    def __init__(self, x, y, z, size, color):
        self.x = x
        self.y = y
        self.z = z
        self.size = size
        self.color = color
        self.angle = 0

    def update(self):
        self.angle += ROTATION_SPEED
        self.x = math.sin(self.angle) * 200
        self.y = 100
        self.z = math.cos(self.angle) * 200

    def draw(self, camera):
        points = [(self.x-self.size, self.y-self.size, self.z+self.size),
                  (self.x+self.size, self.y-self.size, self.z+self.size),
                  (self.x+self.size, self.y+self.size, self.z+self.size),
                  (self.x-self.size, self.y+self.size, self.z+self.size),
                  (self.x-self.size, self.y-self.size, self.z-self.size),
                  (self.x+self.size, self.y-self.size, self.z-self.size),
                  (self.x+self.size, self.y+self.size, self.z-self.size),
                  (self.x-self.size, self.y+self.size, self.z-self.size)]
        faces = [(0,1,2,3), (3,2,6,7), (7,6,5,4), (4,5,1,0), (1,5,6,2), (4,0,3,7)]
        for face in faces:
            polygon = [points[i] for i in face]
            arcade.draw_polygon_filled([(camera.distance*x/(z+camera.distance)+SCREEN_WIDTH//2,
                                         camera.distance*y/(z+camera.distance)+SCREEN_HEIGHT//2) for x,y,z in polygon],
                                       self.color)
            
class RotatingCamera:
    """
    This class draws a rotating camera.
    """
    def __init__(self, x, y, z, angle, distance):
        self.x = x
        self.y = y
        self.z = z
        self.angle = angle
        self.distance = distance

    def update(self):
        self.angle += CAMERA_SPEED
        self.x = math.sin(self.angle) * 200
        self.y = 100
        self.z = math.cos(self.angle) * 200

# --- Set up the game and initialize the variables

# Open the window
arcade.open_window(SCREEN_WIDTH, SCREEN_HEIGHT, "Rotating Cube")

# Set the background color
arcade.set_background_color(arcade.color.AMAZON)

# Get ready to draw
arcade.start_render()

# Create the cube
cube = RotatingCube(0, 0, 0, CUBE_SIZE, arcade.color.RED)

# Create the camera
camera = RotatingCamera(0, 0, 0, 0, CAMERA_DISTANCE)

# --- Draw the game

# Clear the screen to the background color
arcade.start_render()

# Draw the cube
cube.draw(camera)

# Finish drawing
arcade.finish_render()

# Keep the window up until someone closes it.
arcade.run()

# --- Update the game

# Update the cube
cube.update()

# Update the camera
camera.update()

# --- Wrap up

# Close the window
arcade.close_window()
